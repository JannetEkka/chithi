"""Lay each scene's narration at the time its scene started, and join it with
the recording into an MP4 (H.264 + AAC).

    python demo/mux.py demo/out demo/out/chithi-demo.mp4
"""

import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
OUT, MP4 = Path(sys.argv[1]), sys.argv[2]
scenes = json.loads((OUT / "scenes.json").read_text())
video = sorted((OUT / "rec").glob("*.webm"))[-1]
audio = sorted((HERE / "audio").glob("scene*.mp3"))

args = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(video)]
for a in audio:
    args += ["-i", str(a)]
delays = "".join(f"[{i + 1}:a]adelay={int((s + 0.4) * 1000)}|{int((s + 0.4) * 1000)}[a{i}];" for i, s in enumerate(scenes["starts"]))
mix = "".join(f"[a{i}]" for i in range(len(audio))) + f"amix=inputs={len(audio)}:normalize=0[aout]"
args += ["-filter_complex", delays + mix, "-map", "0:v", "-map", "[aout]",
         "-vf", "scale=1280:720:flags=lanczos", "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-pix_fmt", "yuv420p", "-r", "25",
         "-c:a", "aac", "-b:a", "128k", "-shortest", MP4]
subprocess.run(args, check=True)
print("wrote", MP4)
