# Demo video

`chithi-demo.mp4` (2:48) is recorded from the real app on Meta's models, in a headless browser, with a synthetic narrator voice. Nothing in it is staged except what the page labels as test mode.

1. `script.txt`: the narration, one scene per paragraph.
2. Voice, one MP3 per scene (edge-tts, `en-IN-NeerjaNeural`, rate +4%), into `audio/`.
3. `question_hi.wav`: the spoken Hindi question ("अगर मैं समय पर पैसे नहीं भरूँ तो क्या होगा?"), a synthetic voice (`hi-IN-SwaraNeural`) fed to Chromium as its microphone.
4. Start the app with `META_HACK_API_KEY` set. Run test mode once for the hard bank sample in Hindi, so its result is cached and the catch appears while it's being described:
   `curl -F sample_id=bank-005.hard -F language=hi -F tamper=true localhost:8000/api/explain`
5. `python demo/record.py http://localhost:8000 demo/out` drives the page scene by scene and notes when each starts. Scene 2 (the Bengali explanation) and scene 4 (the spoken question) call the models live.
6. `python demo/mux.py demo/out demo/chithi-demo.mp4` places each scene's narration at its start time and writes H.264 + AAC.

The final take cost about $0.12 in model calls.
