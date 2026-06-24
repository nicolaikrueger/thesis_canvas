# Contributing

Contributions are welcome — bug fixes, wording, translations, accessibility, new prompts.

## How it's built
- No build step, no dependencies. Plain HTML + CSS + vanilla JS.
- All UI text lives in `data/i18n.js` (German + English). Keep both languages in sync.
- Topic content is generated — **never edit `data/topics.js` or `thesis_topics.md` by hand.**
  Edit `tools/basket.json` and run `python3 tools/build_topics.py` (see [UPDATING.md](UPDATING.md)).

## Local preview
Open `index.html` directly, or serve the folder:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Pull requests
- Keep changes focused; describe what and why.
- Test offline (`file://`) **and** via the local server.
- For text changes, update both `de` and `en` keys.

## License
By contributing you agree your contributions are licensed under the **EUPL v1.2** (European Union Public Licence).
