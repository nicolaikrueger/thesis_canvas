// Renders dynamic page bits (lists, principle cards) and wires external links.
(function () {
  "use strict";
  var t = function (p) { return window.TDC.t(p); };

  function wireLinks() {
    document.querySelectorAll("[data-link]").forEach(function (a) {
      var key = a.getAttribute("data-link");
      if (window.LINKS[key]) a.setAttribute("href", window.LINKS[key]);
    });
  }

  function renderGuide() {
    var stepsEl = document.getElementById("guide-steps");
    if (stepsEl) { stepsEl.innerHTML = ""; (t("ai.steps") || []).forEach(function (s) { var li = document.createElement("li"); li.textContent = s; stepsEl.appendChild(li); }); }
    var rulesEl = document.getElementById("guide-rules");
    if (rulesEl) { rulesEl.innerHTML = ""; (t("ai.rules") || []).forEach(function (s) { var li = document.createElement("li"); li.textContent = s; rulesEl.appendChild(li); }); }
    var cp = document.getElementById("guide-critique"); if (cp) cp.textContent = t("ai.critiquePrompt");
  }

  function renderPrinciples() {
    var el = document.getElementById("principles-list");
    if (!el) return;
    el.innerHTML = "";
    (t("principles.list") || []).forEach(function (item) {
      var c = document.createElement("div"); c.className = "card";
      var h = document.createElement("h3"); h.textContent = item.h;
      var p = document.createElement("p"); p.textContent = item.b;
      c.appendChild(h); c.appendChild(p); el.appendChild(c);
    });
  }

  function copyButtons() {
    document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = document.getElementById(btn.getAttribute("data-copy-target"));
        if (!target) return;
        var text = target.textContent;
        var done = function () { var o = btn.textContent; btn.textContent = t("common.copied"); setTimeout(function () { btn.textContent = o; }, 1200); };
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done).catch(done); else done();
      });
    });
  }

  function renderProcess() {
    var el = document.getElementById("process-steps");
    if (!el) return;
    el.innerHTML = "";
    (t("process.steps") || []).forEach(function (s) { var li = document.createElement("li"); li.textContent = s; el.appendChild(li); });
  }

  function renderDisclaimer() {
    var footer = document.querySelector(".site-footer");
    if (!footer) return;
    var el = footer.querySelector(".disclaimer");
    if (!el) { el = document.createElement("div"); el.className = "disclaimer wrap"; footer.appendChild(el); }
    el.textContent = t("footer.disclaimer");
  }

  function renderAll() { renderGuide(); renderPrinciples(); renderProcess(); renderDisclaimer(); }
  document.addEventListener("DOMContentLoaded", function () { wireLinks(); renderAll(); copyButtons(); });
  window.TDC.onLangChange(renderAll);
})();
