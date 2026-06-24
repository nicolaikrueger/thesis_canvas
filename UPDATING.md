# Themen aktuell halten / Keeping topics current

Die studierendenseitigen Themen sind **kuratiert und anonymisiert**. Sie entstehen
nicht automatisch aus der Forschungsdatenbank, sondern werden bewusst freigegeben.
So bleibt sichergestellt, dass **keine Forschungsgeheimnisse** veröffentlicht werden.

## Prinzip

- **Quelle der Wahrheit:** `tools/basket.json`. Jeder Eintrag ist *handgeschriebener,
  studierendenseitiger Text* (DE + EN), zugeordnet zu einer **Forschungslinie** und mit
  einem **Bachelor-Zuschnitt**.
- Das Feld `source` (z. B. `I054`) verweist nur zur **Provenienz** auf eine Idee in der
  privaten `forschungsideen.json`. Es wird **nicht** veröffentlicht.
- Der Generator `tools/build_topics.py` erzeugt daraus `data/topics.js` (für die Website)
  und `thesis_topics.md` (menschenlesbar). Beide Dateien sind **generiert** — nicht von
  Hand editieren.

## Wiederkehrender Kurations-Prozess („Basket")

Regelmäßig (z. B. zu Semesterbeginn) gemeinsam durchgehen:

1. Kandidaten aus der Forschungsdatenbank sichten.
2. Pro freigegebener Idee einen Eintrag in `tools/basket.json` anlegen/aktualisieren:
   - studierendenseitigen, **anonymisierten** Titel + Zusammenfassung (DE/EN),
   - eine **Forschungslinie** (`line`) aus `research_lines`,
   - einen **Bachelor-Zuschnitt** (`scope`, DE/EN), der das Thema machbar macht,
   - `level` und `tags`,
   - `source` = ID der zugrunde liegenden Idee (Provenienz, bleibt privat).
3. Generator laufen lassen und committen:
   ```bash
   python3 tools/build_topics.py
   git add tools/basket.json data/topics.js thesis_topics.md
   git commit -m "topics: update basket"
   git push
   ```
   GitHub Pages aktualisiert sich automatisch.

## Eingebaute Schutzmechanismen

`build_topics.py` prüft bei jedem Lauf:

- **Provenienz:** existiert jede `source`-ID in `forschungsideen.json`?
- **Leak-Check:** kommt **keine** Roh-Zeichenkette aus `kollaboratoren`, `notizen`,
  `links` oder eine interne Idee-ID im veröffentlichten Text vor? (Bricht sonst ab.)
- **Vollständigkeit:** jede Karte hat DE- und EN-Titel und eine gültige Forschungslinie.

Liegt die private Datenbank nicht vor (z. B. auf einem fremden Rechner), werden
Provenienz- und Leak-Check übersprungen — der Generator läuft trotzdem aus dem Basket.
Pfad zur DB bei Bedarf überschreiben: `python3 tools/build_topics.py --db /pfad/forschungsideen.json`.

## Forschungslinien anpassen

Die Linien stehen oben in `tools/basket.json` unter `research_lines` (`id`, `de`, `en`).
Neue Linie ergänzen → Themen per `line`-ID zuordnen → Generator laufen lassen.
