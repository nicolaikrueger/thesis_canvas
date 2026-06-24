// Tiny i18n engine. Works offline (no fetch). Depends on window.I18N (data/i18n.js).
(function () {
  "use strict";
  var KEY = "tdc_lang";
  function getLang() {
    var l = localStorage.getItem(KEY);
    return (l === "de" || l === "en") ? l : "de";
  }
  function resolve(lang, path) {
    var obj = window.I18N[lang];
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) return undefined;
      obj = obj[parts[i]];
    }
    return obj;
  }
  function t(path) {
    var v = resolve(TDC.lang, path);
    if (v === undefined) v = resolve("de", path); // fallback
    return v === undefined ? path : v;
  }
  function apply(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v;
    });
    root.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (typeof v === "string") el.innerHTML = v;
    });
    root.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-ph"));
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });
    root.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-title"));
      if (typeof v === "string") el.setAttribute("title", v);
    });
    document.documentElement.lang = TDC.lang;
  }
  function setLang(lang) {
    TDC.lang = (lang === "en") ? "en" : "de";
    localStorage.setItem(KEY, TDC.lang);
    apply(document);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: TDC.lang } }));
  }
  function toggle() { setLang(TDC.lang === "de" ? "en" : "de"); }

  var TDC = window.TDC = { lang: getLang(), t: t, apply: apply, setLang: setLang, toggle: toggle,
    onLangChange: function (cb) { document.addEventListener("langchange", function (e) { cb(e.detail.lang); }); } };

  document.addEventListener("DOMContentLoaded", function () {
    apply(document);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function (e) { e.preventDefault(); toggle(); });
    });
  });
})();
