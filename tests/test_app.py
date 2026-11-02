"""The API in demo mode (no key): sample letters work, uploads are refused."""

from pathlib import Path

import pytest
from fastapi.testclient import TestClient

OUT = Path(__file__).parent.parent / "letters" / "out"


@pytest.fixture
def client(monkeypatch):
    monkeypatch.delenv("META_HACK_API_KEY", raising=False)
    from chithi.app import app
    return TestClient(app)


def test_health_says_not_live(client):
    assert client.get("/api/health").json()["live"] is False


@pytest.mark.skipif(not (OUT / "elec-000.json").exists(), reason="run letters/generate.py first")
def test_sample_letter_in_demo_mode(client):
    r = client.post("/api/explain", data={"sample_id": "elec-000", "language": "hi"})
    assert r.status_code == 200
    d = r.json()
    assert d["backend"] == "mock" and d["verified"]


def test_upload_needs_live_models(client):
    r = client.post("/api/explain", data={"language": "bn"}, files={"photo": ("x.jpg", b"not really", "image/jpeg")})
    assert r.status_code == 503


def test_bad_sample_id(client):
    assert client.post("/api/explain", data={"sample_id": "../etc", "language": "bn"}).status_code == 404


@pytest.mark.skipif(not (OUT / "bank-005.hard.jpg").exists(), reason="run letters/generate.py --hard-only first")
def test_hard_sample_and_test_mode(client):
    ids = [s["id"] for s in client.get("/api/samples").json()]
    assert "bank-005.hard" in ids
    d = client.post("/api/explain", data={"sample_id": "bank-005.hard", "language": "bn", "tamper": "true"}).json()
    assert d["tampered"] and len(d["check_yourself"]) == 1


@pytest.mark.skipif(not (OUT / "elec-000.json").exists(), reason="run letters/generate.py first")
def test_streamed_explanation_ends_with_the_result(client):
    import json as _json
    r = client.post("/api/explain", data={"sample_id": "elec-000", "language": "bn", "stream": "true"})
    events = [_json.loads(line) for line in r.text.splitlines() if line.strip()]
    kinds = [e["type"] for e in events]
    assert kinds[0] == "page" and "step" in kinds and kinds[-1] == "result"
    assert events[-1]["result"]["verified"]
