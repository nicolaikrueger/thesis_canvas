// Topic browser — renders window.TOPICS grouped by research line, with search + filter.
(function () {
  "use strict";
  var t = function (p) { return window.TDC.t(p); };
  var mount = document.getElementById("topics-root");
  if (!mount || !window.TOPICS) return;

  var DATA = window.TOPICS;
  var searchEl = document.getElementById("topic-search");
  var filterEl = document.getElementById("topic-filter");
  var levelEl = document.getElementById("topic-level");
  var countEl = document.getElementById("topic-count");

  function lang() { return window.TDC.lang; }

  function buildFilter() {
    if (filterEl) {
      var lv = filterEl.value;
      filterEl.innerHTML = "";
      var all = document.createElement("option"); all.value = ""; all.textContent = t("topics.allLines"); filterEl.appendChild(all);
      DATA.lines.forEach(function (l) { var o = document.createElement("option"); o.value = l.id; o.textContent = l[lang()]; filterEl.appendChild(o); });
      filterEl.value = lv || "";
    }
    if (levelEl) {
      var cur = levelEl.value;
      levelEl.innerHTML = "";
      [["", "topics.allLevels"], ["Bachelor", "topics.bachelor"], ["Master", "topics.master"]].forEach(function (pair) {
        var o = document.createElement("option"); o.value = pair[0]; o.textContent = t(pair[1]); levelEl.appendChild(o);
      });
      levelEl.value = cur || "";
    }
  }

  function matches(topic, q, level) {
    if (level && (topic.level || []).indexOf(level) === -1) return false;
    if (!q) return true;
    var d = topic[lang()];
    var hay = (d.title + " " + d.summary + " " + d.scope + " " + (topic.tags || []).join(" ")).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function card(topic) {
    var d = topic[lang()];
    var c = document.createElement("div"); c.className = "card topic-card";
    var h = document.createElement("h3"); h.textContent = d.title; c.appendChild(h);
    if (topic.level && topic.level.length) { var lv = document.createElement("div"); lv.className = "levels";
      topic.level.forEach(function (x) { var s = document.createElement("span"); s.className = "pill"; s.textContent = x; lv.appendChild(s); }); c.appendChild(lv); }
    var p = document.createElement("p"); p.textContent = d.summary; c.appendChild(p);
    var dataText = (topic.data || {})[lang()];
    if (dataText) {
      var db = document.createElement("div"); db.className = "data";
      var dl = document.createElement("b"); dl.textContent = t("topics.dataLabel") + ": "; db.appendChild(dl);
      db.appendChild(document.createTextNode(dataText)); c.appendChild(db);
    }
    var scope = document.createElement("div"); scope.className = "scope";
    var b = document.createElement("b"); b.textContent = t("topics.scopeLabel") + ": "; scope.appendChild(b);
    scope.appendChild(document.createTextNode(d.scope)); c.appendChild(scope);
    var tags = document.createElement("div");
    (topic.tags || []).forEach(function (tg) { var s = document.createElement("span"); s.className = "tag"; s.textContent = tg; tags.appendChild(s); });
    c.appendChild(tags);
    var btn = document.createElement("button"); btn.className = "btn small"; btn.textContent = t("topics.use");
    btn.addEventListener("click", function () {
      sessionStorage.setItem("tdc_prefill", JSON.stringify({ title: d.title }));
      window.location.href = "canvas.html";
    });
    c.appendChild(btn);
    return c;
  }

  function render() {
    var q = (searchEl && searchEl.value || "").trim().toLowerCase();
    var lineFilter = filterEl && filterEl.value || "";
    var levelFilter = levelEl && levelEl.value || "";
    mount.innerHTML = "";
    var total = 0;
    DATA.lines.forEach(function (line) {
      if (lineFilter && line.id !== lineFilter) return;
      var topics = DATA.topics.filter(function (tp) { return tp.line === line.id && matches(tp, q, levelFilter); });
      if (!topics.length) return;
      total += topics.length;
      var group = document.createElement("section"); group.className = "line-group";
      var h2 = document.createElement("h2"); h2.textContent = line[lang()]; group.appendChild(h2);
      var grid = document.createElement("div"); grid.className = "cards";
      topics.forEach(function (tp) { grid.appendChild(card(tp)); });
      group.appendChild(grid); mount.appendChild(group);
    });
    if (!total) { var none = document.createElement("p"); none.className = "lede"; none.textContent = t("topics.none"); mount.appendChild(none); }
    if (countEl) countEl.textContent = total + " " + t("topics.countSuffix");
  }

  buildFilter();
  render();
  if (searchEl) searchEl.addEventListener("input", render);
  if (filterEl) filterEl.addEventListener("change", render);
  if (levelEl) levelEl.addEventListener("change", render);
  window.TDC.onLangChange(function () { buildFilter(); render(); });
})();
