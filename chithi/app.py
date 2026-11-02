"""Chithi's web app: a page to photograph a letter, and the API behind it."""

from __future__ import annotations

import json
import os
import time
from collections import defaultdict
from pathlib import Path

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.concurrency import run_in_threadpool
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from . import agent, meta, prompts
from .mock import MockBackend

ROOT = Path(__file__).resolve().parent.parent
SAMPLES = ROOT / "letters" / "out"
WEB = ROOT / "web"

# The live product spends Meta credits, so each visitor gets a few letters a day.
PER_IP_PER_DAY = int(os.environ.get("CHITHI_PER_IP_PER_DAY", "15"))
ALL_PER_DAY = int(os.environ.get("CHITHI_ALL_PER_DAY", "400"))
MAX_UPLOAD = 10 * 1024 * 1024

app = FastAPI(title="Chithi")
app.mount("/static", StaticFiles(directory=WEB), name="static")
app.mount("/samples", StaticFiles(directory=SAMPLES), name="samples")

_used: dict[str, list[float]] = defaultdict(list)
# Sample letters give the same answer every time; run each one live once per
# language and keep the result, so trying the samples costs nothing after that.
_sample_cache: dict[tuple[str, str], dict] = {}


def _spend(request: Request) -> None:
    now = time.time()
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "?").split(",")[0].strip()
    for k in list(_used):
        _used[k] = [t for t in _used[k] if now - t < 86400]
    if len(_used[ip]) >= PER_IP_PER_DAY or sum(map(len, _used.values())) >= ALL_PER_DAY:
        raise HTTPException(429, "Chithi has reached today's limit. Try the sample letters, or come back tomorrow.")
    _used[ip].append(now)


def live() -> bool:
    return bool(meta.meta_key())


def _explainer() -> str:
    return "spark-open" if os.environ.get("CHITHI_EXPLAINER") == "spark-open" and meta.baseten_key() else "spark"


def _truth(sample_id: str) -> dict:
    """A sample id is a letter id, with ".hard" for its folded, shadowed photo."""
    path = SAMPLES / f"{sample_id.removesuffix('.hard')}.json"
    if not sample_id.removesuffix(".hard").replace("-", "").isalnum() or not path.exists():
        raise HTTPException(404, "No such sample letter")
    return json.loads(path.read_text())


@app.get("/")
def index():
    return FileResponse(WEB / "index.html")


@app.get("/api/health")
def health():
    return {"live": live(), "explainer": _explainer(), "models": {
        "segment": meta.SAM, "read": meta.SPARK,
        "explain": meta.SPARK_OPEN if _explainer() == "spark-open" else meta.SPARK, "voice": meta.VOICE}}


@app.get("/api/samples")
def samples():
    # Two of each kind is plenty for the picker: one clean photo, one hard one.
    out = []
    seen: dict[str, int] = defaultdict(int)
    for p in sorted(SAMPLES.glob("*.json")):
        t = json.loads(p.read_text())
        seen[t["kind"]] += 1
        if seen[t["kind"]] > 2:
            continue
        hard = seen[t["kind"]] == 2
        sid = t["id"] + (".hard" if hard else "")
        out.append({"id": sid, "kind": t["kind"], "language": t["language"], "hard": hard,
                    "photo": f"/samples/{t['id']}.{'hard' if hard else 'photo'}.jpg"})
    return out


@app.post("/api/explain")
async def explain(request: Request, language: str = Form("bn"), sample_id: str = Form(""), tamper: bool = Form(False),
                  photo: UploadFile | None = File(None)):
    if language not in prompts.LANGUAGES:
        raise HTTPException(400, "language must be bn, hi or en")
    if sample_id:
        truth = _truth(sample_id)
        image = (SAMPLES / (f"{truth['id']}.hard.jpg" if sample_id.endswith(".hard") else f"{sample_id}.photo.jpg")).read_bytes()
    elif photo is not None:
        truth = None
        image = await photo.read()
        if len(image) > MAX_UPLOAD:
            raise HTTPException(413, "Photo is too large (10 MB at most)")
    else:
        raise HTTPException(400, "Send a photo or pick a sample letter")

    if tamper and not sample_id:
        raise HTTPException(400, "Test mode works on the sample letters only")
    key = (sample_id, language, tamper)
    if live() and sample_id and key in _sample_cache:
        return {**_sample_cache[key], "cached": True}
    if live():
        _spend(request)
        backend = agent.LiveBackend(_explainer())
    elif truth is not None:
        backend = MockBackend(truth)
    else:
        raise HTTPException(503, "Live models aren't switched on yet; try a sample letter.")
    try:
        # The models take 15-30 s; keep the server free for other requests meanwhile.
        res = await run_in_threadpool(lambda: agent.run(image, language, backend, tamper=tamper))
    except meta.MetaError as e:
        raise HTTPException(502, f"A Meta model call failed: {e}") from e
    out = res.to_dict()
    out["backend"] = backend.name
    if sample_id and backend.name == "live":
        _sample_cache[key] = out
    return out


@app.post("/api/ask")
async def ask(request: Request, language: str = Form("bn"), letter_text: str = Form(...),
              second_reading: str = Form(""), question: str = Form(""), audio: UploadFile | None = File(None)):
    if language not in prompts.LANGUAGES:
        raise HTTPException(400, "language must be bn, hi or en")
    if not live():
        raise HTTPException(503, "Questions need the live models, which aren't switched on yet.")
    _spend(request)
    heard = None
    if audio is not None:
        wav = await audio.read()
        heard = await run_in_threadpool(meta.transcribe, wav, language_bias=[{"bn": "bn", "hi": "hi", "en": "en"}[language]])
        question = heard
    if not question.strip():
        raise HTTPException(400, "Ask a question, typed or spoken")
    out = await run_in_threadpool(agent.answer, question, letter_text, second_reading or None, language,
                                  agent.LiveBackend(_explainer()))
    out["heard"] = heard
    return out
