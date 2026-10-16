/* JJKS website — minimal, progressive-enhancement JavaScript.
   Every page works without JS; this only adds the mobile menu, the portfolio
   filter, and friendlier form validation. No tracking, no cookies. */
(function () {
  "use strict";

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---- Current year in footer -------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Portfolio filter ----------------------------------------------------- */
  var chips = document.querySelectorAll(".chip[data-filter]");
  if (chips.length) {
    var items = document.querySelectorAll("[data-category]");
    var empty = document.querySelector(".empty-state");
    var status = document.getElementById("filter-status");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        var shown = 0;
        items.forEach(function (item) {
          var match = f === "all" || item.getAttribute("data-category").split(" ").indexOf(f) !== -1;
          item.hidden = !match;
          if (match) shown++;
        });
        if (empty) empty.classList.toggle("is-visible", shown === 0);
        if (status) status.textContent = shown + (shown === 1 ? " project" : " projects") + " shown";
      });
    });
  }

  /* ---- Forms: accessible validation + free form-service submission -------- */
  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };

  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    var statusBox = form.querySelector(".form-status");
    var showStatus = function (msg) {
      if (!statusBox) return;
      statusBox.textContent = msg;
      statusBox.classList.add("is-visible");
      statusBox.focus();
    };

    form.addEventListener("submit", function (e) {
      var firstBad = null;
      form.querySelectorAll("[data-required]").forEach(function (field) {
        var err = document.getElementById(field.getAttribute("aria-describedby").split(" ")[0]);
        var bad = field.type === "checkbox" ? !field.checked
          : field.type === "email" ? !emailOk(field.value.trim())
          : field.value.trim() === "";
        field.setAttribute("aria-invalid", String(bad));
        if (err) err.classList.toggle("is-visible", bad);
        if (bad && !firstBad) firstBad = field;
      });
      if (firstBad) { e.preventDefault(); firstBad.focus(); return; }

      // The form-service endpoint has not been configured yet (see README.md).
      if (form.action.indexOf("YOUR_") !== -1) {
        e.preventDefault();
        showStatus(form.getAttribute("data-not-ready"));
        return;
      }

      // Submit in the background so the visitor stays on the page.
      if (window.fetch) {
        e.preventDefault();
        var btn = form.querySelector("[type=submit]");
        if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }
        fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error("Request failed");
            form.reset();
            showStatus(form.getAttribute("data-success"));
          })
          .catch(function () {
            showStatus(form.getAttribute("data-error"));
          })
          .then(function () {
            if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; }
          });
      }
    });

    // Clear an error as soon as the visitor fixes it.
    form.querySelectorAll("[data-required]").forEach(function (field) {
      field.addEventListener(field.type === "checkbox" ? "change" : "input", function () {
        if (field.getAttribute("aria-invalid") !== "true") return;
        var ok = field.type === "checkbox" ? field.checked
          : field.type === "email" ? emailOk(field.value.trim()) : field.value.trim() !== "";
        if (ok) {
          field.setAttribute("aria-invalid", "false");
          var err = document.getElementById(field.getAttribute("aria-describedby").split(" ")[0]);
          if (err) err.classList.remove("is-visible");
        }
      });
    });
  });
})();
