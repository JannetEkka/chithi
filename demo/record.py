"""Record Chithi's demo video: drive the page scene by scene, holding each
scene at least as long as its narration, and note when each scene starts.

    python demo/record.py http://localhost:8000 demo/out
Writes <out>/rec/*.webm and <out>/scenes.json (scene start times in seconds).
"""

import json
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent
URL, OUT = sys.argv[1], Path(sys.argv[2])
MOCK = "--mock" in sys.argv


def length(mp3: Path) -> float:
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(mp3)],
                                capture_output=True, text=True).stdout)


NARRATION = [length(p) for p in sorted((HERE / "audio").glob("scene*.mp3"))]
starts: list[float] = []
t0 = 0.0


def scene(i: int):
    starts.append(time.time() - t0)
    print(f"scene {i + 1} at {starts[-1]:.1f}s")
    return time.time() + NARRATION[i] + 0.8  # earliest end


def hold(page, until: float):
    left = until - time.time()
    if left > 0:
        page.wait_for_timeout(int(left * 1000))


def scroll_to(page, selector: str, ms: int = 1200):
    page.evaluate("""([sel]) => document.querySelector(sel).scrollIntoView({behavior: 'smooth', block: 'start'})""", [selector])
    page.wait_for_timeout(ms)


def glide(page, pixels: int, seconds: float):
    steps = int(seconds * 10)
    for _ in range(steps):
        page.mouse.wheel(0, pixels / steps)
        page.wait_for_timeout(100)


with sync_playwright() as p:
    browser = p.chromium.launch(args=[
        "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream",
        f"--use-file-for-fake-audio-capture={HERE / 'question_hi.wav'}",
    ])
    ctx = browser.new_context(viewport={"width": 1024, "height": 576}, device_scale_factor=1,
                              record_video_dir=str(OUT / "rec"), record_video_size={"width": 1024, "height": 576})
    t0 = time.time()
    page = ctx.new_page()
    page.goto(URL)
    page.wait_for_selector(".sample")

    # 1. The problem, on the start page.
    end = scene(0)
    page.wait_for_timeout(9000)
    glide(page, 420, 6)
    hold(page, end)

    # 2. A folded, shadowed bank reminder, in Bengali.
    end = scene(1)
    page.click('.sample[data-id="bank-005.hard"]')
    page.wait_for_selector("#result:not([hidden])", timeout=150000)
    hold(page, end)

    # 3. The answer first, and the proof in the photo.
    end = scene(2)
    page.wait_for_timeout(9000)
    page.click("#actSee")
    page.wait_for_timeout(1200)
    glide(page, 420, 5)
    page.wait_for_timeout(2500)
    page.click("#verified .card >> nth=0")
    hold(page, end)

    # 4. A spoken question in Hindi.
    end = scene(3)
    if not MOCK:
        page.click('.langs button[data-lang="hi"]')
        scroll_to(page, "#askBox", 1500)
        page.click("#mic")
        page.wait_for_timeout(6400)
        page.click("#mic")
        page.wait_for_selector("#answers .card", timeout=120000)
        scroll_to(page, "#answers", 1500)
        page.wait_for_timeout(5000)
    hold(page, end)

    # 5. Try to break it.
    end = scene(4)
    scroll_to(page, "#tamperBtn", 1200)
    page.wait_for_timeout(1500)
    page.click("#tamperBtn")
    page.wait_for_selector("#result:not([hidden])", timeout=150000)
    page.wait_for_selector("#tampered:not([hidden])")
    page.wait_for_timeout(2500)
    scroll_to(page, "#cyWrap", 1500)
    page.wait_for_timeout(6000)
    hold(page, end)

    # 6. How it was checked, and the measurements.
    end = scene(5)
    page.click("details.how summary >> nth=0")
    scroll_to(page, "details.how", 1500)
    glide(page, 300, 8)
    hold(page, end)

    # 7. Close.
    end = scene(6)
    page.evaluate("window.scrollTo({top: 0, behavior: 'smooth'})")
    hold(page, end)
    page.wait_for_timeout(800)
    total = time.time() - t0
    ctx.close()
    browser.close()

# Run demo/record.py with a server whose test-mode result for this sample is
# already cached (see demo/README.md), so the catch is on screen while it's described.
(OUT / "scenes.json").write_text(json.dumps({"starts": starts, "narration": NARRATION, "total": total}, indent=1))
print("done", round(total, 1), "s")
