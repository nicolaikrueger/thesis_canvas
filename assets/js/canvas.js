// Interactive Thesis Design Canvas — offline-first, localStorage autosave.
(function () {
  "use strict";
  var t = function (p) { return window.TDC.t(p); };
  var STORE = "tdc_canvas";
  var root = document.getElementById("canvas-root");
  if (!root) return;

  // Field layout mirrors the original canvas.
  var HEAD = ["name", "title", "date"];
  var CONTENT = ["research_questions", "problem", "data", "relevance", "method", "outline", "literature_base"];
  var COLUMNS = [
    [{ f: "research_questions", tall: true }],
    [{ f: "problem" }, { f: "relevance" }],
    [{ f: "data" }, { f: "method" }],
    [{ f: "outline", tall: true }]
  ];

  var BOILERPLATE = {
    de: "1. Einleitung\n2. Theoretischer Hintergrund und Literaturübersicht\n3. Forschungsdesign und Datenerhebung\n   3.1 Forschungsansatz und Methodik\n   3.2 Datenerhebung\n   3.3 Datenauswertung\n4. Ergebnisse und Diskussion\n5. Fazit und Würdigung\n   5.1 Handlungsempfehlungen\n   5.2 Kritische Reflexion und Limitationen\n   5.3 Zusammenfassung und Ausblick",
    en: "1. Introduction\n2. Theoretical background and literature review\n3. Research design and data collection\n   3.1 Research approach and methodology\n   3.2 Data collection\n   3.3 Data analysis\n4. Results and discussion\n5. Conclusion\n   5.1 Recommendations\n   5.2 Critical reflection and limitations\n   5.3 Summary and outlook"
  };

  var state = load();
  function load() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function save() { localStorage.setItem(STORE, JSON.stringify(state)); flashSaved(); }
  var savedEl;
  function flashSaved() { if (!savedEl) return; savedEl.style.opacity = "1"; clearTimeout(flashSaved._t);
    flashSaved._t = setTimeout(function () { savedEl.style.opacity = ".4"; }, 900); }

  // Adopt a topic passed from the topics page.
  var adopted = false;
  try {
    var pre = JSON.parse(sessionStorage.getItem("tdc_prefill") || "null");
    if (pre && pre.title) { state.title = pre.title; if (pre.rq && !state.research_questions) state.research_questions = pre.rq; adopted = true; sessionStorage.removeItem("tdc_prefill"); }
  } catch (e) {}

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  function makeTextarea(field) {
    var ta = el("textarea");
    ta.id = "f_" + field; ta.value = state[field] || "";
    ta.addEventListener("input", function () { state[field] = ta.value; save(); });
    return ta;
  }

  function makeAiTip(field) {
    var d = el("details", "ai-tip");
    var sum = el("summary"); sum.setAttribute("data-tiplabel", "1"); sum.textContent = t("canvas.aiTipLabel");
    var body = el("div", "ai-body");
    var p = el("p"); p.setAttribute("data-tip", field); p.textContent = t("canvas.aiTips." + field);
    var pr = el("div", "prompt"); pr.setAttribute("data-prompt", field); pr.textContent = t("canvas.aiPrompts." + field);
    var row = el("div", "copy-row");
    var btn = el("button", "btn ghost small"); btn.textContent = t("common.copy");
    btn.addEventListener("click", function () { copy(pr.textContent, btn); });
    row.appendChild(btn);
    body.appendChild(p); body.appendChild(pr); body.appendChild(row);
    d.appendChild(sum); d.appendChild(body);
    return d;
  }

  function makeBox(field, tall) {
    var box = el("div", "cbox" + (tall ? " tall" : ""));
    var head = el("div", "field-head");
    var lab = el("label"); lab.setAttribute("for", "f_" + field); lab.setAttribute("data-flabel", field);
    lab.textContent = t("canvas.fields." + field);
    head.appendChild(lab);
    var hint = el("div", "hint"); hint.setAttribute("data-fhint", field); hint.textContent = t("canvas.tooltips." + field);
    box.appendChild(head); box.appendChild(hint); box.appendChild(makeTextarea(field)); box.appendChild(makeAiTip(field));
    return box;
  }

  function render() {
    root.innerHTML = "";
    // Header row
    var canvas = el("div", "canvas");
    var head = el("div", "canvas-head");
    HEAD.forEach(function (h) {
      var cell = el("div", "cell");
      var lab = el("label"); lab.setAttribute("data-headlabel", h);
      lab.textContent = h === "name" ? t("canvas.name") : h === "title" ? t("canvas.thesisTitle") : t("canvas.date");
      var inp = el("input"); inp.type = (h === "date") ? "date" : "text"; inp.id = "f_" + h; inp.value = state[h] || "";
      inp.addEventListener("input", function () { state[h] = inp.value; save(); });
      cell.appendChild(lab); cell.appendChild(inp); head.appendChild(cell);
    });
    canvas.appendChild(head);

    // 4-column grid
    var grid = el("div", "canvas-grid");
    COLUMNS.forEach(function (col) {
      var c = el("div", "canvas-col");
      col.forEach(function (item) { c.appendChild(makeBox(item.f, item.tall)); });
      grid.appendChild(c);
    });
    canvas.appendChild(grid);

    // Full-width literature row
    var footRow = el("div", "canvas-grid canvas-foot-row");
    footRow.style.gridTemplateColumns = "1fr";
    var litCol = el("div", "canvas-col"); litCol.style.borderRight = "none";
    litCol.appendChild(makeBox("literature_base", false));
    footRow.appendChild(litCol);
    canvas.appendChild(footRow);

    // Print-only credit line
    var credit = el("div", "canvas-credit");
    credit.appendChild(el("span", null, "EUPL v1.2 · Nicolai Krüger"));
    credit.appendChild(el("span", null, "nicolaikrueger.com"));
    canvas.appendChild(credit);

    root.appendChild(canvas);
  }

  // Re-translate text without losing textarea values.
  function retranslate() {
    document.querySelectorAll("[data-tiplabel]").forEach(function (e) { e.textContent = t("canvas.aiTipLabel"); });
    document.querySelectorAll("[data-flabel]").forEach(function (e) { e.textContent = t("canvas.fields." + e.getAttribute("data-flabel")); });
    document.querySelectorAll("[data-fhint]").forEach(function (e) { e.textContent = t("canvas.tooltips." + e.getAttribute("data-fhint")); });
    document.querySelectorAll("[data-tip]").forEach(function (e) { e.textContent = t("canvas.aiTips." + e.getAttribute("data-tip")); });
    document.querySelectorAll("[data-prompt]").forEach(function (e) { e.textContent = t("canvas.aiPrompts." + e.getAttribute("data-prompt")); });
    document.querySelectorAll("[data-headlabel]").forEach(function (e) { var h = e.getAttribute("data-headlabel");
      e.textContent = h === "name" ? t("canvas.name") : h === "title" ? t("canvas.thesisTitle") : t("canvas.date"); });
    document.querySelectorAll(".ai-tip .copy-row .btn").forEach(function (e) { e.textContent = t("common.copy"); });
  }

  function copy(text, btn) {
    var done = function () { var o = btn.textContent; btn.textContent = t("common.copied"); setTimeout(function () { btn.textContent = o; }, 1200); };
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text); done(); }); }
    else { fallback(text); done(); }
  }
  function fallback(text) { var ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(ta); }

  function exportMarkdown() {
    var L = window.I18N[window.TDC.lang].canvas;
    var lines = ["# " + (state.title || L.thesisTitle), "", "*" + (state.name || "") + (state.date ? " · " + state.date : "") + "*", ""];
    CONTENT.forEach(function (f) { lines.push("## " + L.fields[f]); lines.push(""); lines.push(state[f] || "—"); lines.push(""); });
    download((slug(state.title) || "thesis-canvas") + ".md", lines.join("\n"), "text/markdown");
  }
  function exportJson() { download((slug(state.title) || "thesis-canvas") + ".json", JSON.stringify(state, null, 2), "application/json"); }
  function importJson() {
    var inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/json,.json";
    inp.onchange = function () { var file = inp.files[0]; if (!file) return; var r = new FileReader();
      r.onload = function () { try { var obj = JSON.parse(r.result); if (obj && typeof obj === "object") { state = obj; save(); render(); } } catch (e) { alert("JSON?"); } };
      r.readAsText(file); };
    inp.click();
  }
  function download(name, content, mime) {
    var blob = new Blob([content], { type: mime }); var url = URL.createObjectURL(blob);
    var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click();
    document.body.removeChild(a); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function slug(s) { return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 50); }

  function wireToolbar() {
    savedEl = document.getElementById("save-hint");
    bind("act-print", function () { window.print(); });
    bind("act-md", exportMarkdown);
    bind("act-json", exportJson);
    bind("act-import", importJson);
    bind("act-boiler", function () { var f = document.getElementById("f_outline");
      var bp = BOILERPLATE[window.TDC.lang] || BOILERPLATE.de; state.outline = (state.outline ? state.outline + "\n" : "") + bp; f.value = state.outline; save(); });
    bind("act-reset", function () { if (confirm(t("canvas.resetConfirm"))) { state = {}; save(); render(); } });
  }
  function bind(id, fn) { var e = document.getElementById(id); if (e) e.addEventListener("click", fn); }

  render();
  wireToolbar();
  if (adopted) { save(); var note = document.getElementById("topic-note"); if (note) note.style.display = "block"; }
  window.TDC.onLangChange(retranslate);
})();
