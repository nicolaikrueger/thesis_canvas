# Thesis Design Canvas

Eine interaktive, zweisprachige Vorlage für die Themenfindung und Betreuung von Abschlussarbeiten. Läuft ohne Installation, online oder lokal im Browser.

*An interactive, bilingual template for finding thesis topics and supervising theses. Runs without installation, online or locally in the browser.*

> Live: https://nicolaikrueger.github.io/thesis_canvas/ · Lizenz: EUPL v1.2

---

## Worum es geht

Eine wissenschaftliche Arbeit zu schreiben ist anspruchsvoll. Statt mit einem Exposé zu starten, arbeiten Studierende mit einem Canvas. Das senkt die Einstiegshürde und ermöglicht früh ein laufendes Feedback mit der Betreuung.

Das Repository enthält:

- **Canvas** (`canvas.html`): die 8 Felder ausfüllbar, mit Hinweis und einem KI-Tipp samt Prompt pro Feld. Speichert lokal im Browser, Export als PDF, Markdown oder JSON, Import von JSON.
- **Themen** (`topics.html`): kuratierte, anonymisierte Themen aus laufender Forschung, nach Forschungslinie gruppiert und nach Bachelor/Master filterbar. Aufgenommen wird nur, was eine konkrete **Datenbasis** hat (OZG-Dashboard, Open Data, europäische Datenpools, OpenCoDE/EU-Katalog, eigene oder in Promotionen entstehende Datensätze). Eigene Themen sind willkommen; das hier sind Impulse für die, die einen Anstoß brauchen.
- **KI-Anleitung** (`ai-guide.html`): wie man lokal mit KI arbeitet, mit Datenschutz-Hinweisen und Master-Prompt.
- **Grundsätze & Kanäle** (`principles.html`): Betreuungs-Leitsätze und verlinkte Ressourcen.

Es gibt keinen Build und keinen Server. `index.html` per Doppelklick öffnen oder über GitHub Pages ausliefern.

*Same in English: an interactive canvas, a curated topic browser, an AI usage guide and supervision principles. Bilingual (DE/EN), offline-capable, EUPL v1.2.*

---

## Schnellstart / Quick start

- **Online:** open the live site above.
- **Offline / lokal:** Repository herunterladen und `index.html` im Browser öffnen. Es funktioniert ohne Internet (außer den externen Links).

## Struktur / Structure

```
index.html · canvas.html · topics.html · ai-guide.html · principles.html
assets/css · assets/js          UI (Vanilla JS, kein Build)
data/i18n.js                    alle Texte DE/EN (eine Quelle)
data/topics.js                  GENERIERT — nicht von Hand editieren
tools/basket.json               kuratierte Themen (Quelle der Wahrheit)
tools/build_topics.py           Generator (nur Standardbibliothek)
canvas-templates/               Original-Canvas (JPG) + fillable PDFs (Offline-Fallback)
docs/                           Boilerplate-Gliederung, Themenliste IT-Fachverfahren
thesis_topics.md                GENERIERT — menschenlesbare Themenliste
```

## Themen aktualisieren / Updating topics

Themen werden zentral in `tools/basket.json` gepflegt und mit dem Generator erzeugt. Details: **[UPDATING.md](UPDATING.md)**.

```bash
python3 tools/build_topics.py
```

## Mitwirken / Contributing

Verbesserungen sind willkommen — siehe **[CONTRIBUTING.md](CONTRIBUTING.md)**.

## Lizenz / License

Lizenziert unter der **EUPL v1.2** (European Union Public Licence) — siehe [LICENSE](LICENSE), offizieller Text auf [eupl.eu](https://eupl.eu/). © Nicolai Krüger.
Akademische Homepage: [@HSPV](https://www.hspv.nrw.de/organisation/personalverzeichnis/eintrag/dr-nicolai-krueger) · [Interoperable Europe (EU)](https://interoperable-europe.ec.europa.eu/user/772249).
