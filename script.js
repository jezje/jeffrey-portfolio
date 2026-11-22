/* =========================================================
   Jeffrey's Portfolio - script.js
   Handles: mobile menu, eased smooth scrolling, sticky header, active link,
   reveal on scroll, hover light, typing text, running strip, smart image
   loading, project filters, certificate card + viewer, back-to-top,
   contact form.

   Every feature runs inside safe(...), so if one ever fails the rest of the
   site still works.
   ========================================================= */

document.documentElement.classList.add("js");

(function () {
  "use strict";

  /* ---------- The email the contact form uses (only if the form is switched back on) ---------- */
  var CONTACT_EMAIL = "jeffreynetworktechnician@gmail.com";

  // Some phones turn on "reduce motion" (battery saver / remove animations), which used to switch off the
  // running text and strip there. Kept off so every device behaves like the desktop.
  var reduceMotion = false;

  function $(id) { return document.getElementById(id); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function safe(name, fn) {
    try { fn(); } catch (err) { if (window.console && console.error) console.error("[portfolio] " + name + " failed:", err); }
  }

  /* =========================================================
     SMART IMAGE LOADING
     If images/project-1.jpg is not found, the site also tries the
     other common names a phone or computer might have produced:
     .jpeg  .png  .webp  .JPG  .JPEG  .PNG
     (GitHub Pages is case-sensitive, so "photo.JPG" is not "photo.jpg".)
     ========================================================= */
  var ALT_EXTS = ["jpeg", "png", "webp", "JPG", "JPEG", "PNG"];
  var resolvedImages = {};   // wanted path -> path that really exists
  var missingImages = {};    // wanted paths that were not found in any format

  function candidates(src, skipOriginal) {
    var list = skipOriginal ? [] : [src];
    var m = /^(.*)\.([A-Za-z0-9]+)$/.exec(src);
    if (m) {
      ALT_EXTS.forEach(function (ext) {
        var url = m[1] + "." + ext;
        if (url !== src && list.indexOf(url) < 0) list.push(url);
      });
    }
    return list;
  }

  function loadImage(src, onOk, onFail, skipOriginal) {
    if (resolvedImages[src]) { onOk(resolvedImages[src]); return; }
    if (missingImages[src]) { onFail(); return; }
    var list = candidates(src, skipOriginal), i = 0;
    (function next() {
      if (i >= list.length) { missingImages[src] = true; onFail(); return; }
      var url = list[i], probe = new Image();
      probe.onload = function () { resolvedImages[src] = url; onOk(url); };
      probe.onerror = function () { i++; next(); };
      probe.src = url;
    })();
  }

  function initImages() {
    $$(".img-box").forEach(function (box) {
      var img = box.querySelector("img");
      if (!img) return;
      var src = img.getAttribute("src") || "";
      box.setAttribute("data-file", src);          // shown on the placeholder
      if (img.hasAttribute("data-managed")) return; // managed elsewhere

      var tried = false;
      function ok() { box.classList.remove("no-image"); }
      function fail() { box.classList.add("no-image"); }
      function recover() {
        if (tried) { fail(); return; }
        tried = true;
        loadImage(src, function (url) { img.setAttribute("src", url); ok(); }, fail, true);
      }
      img.addEventListener("load", ok);
      img.addEventListener("error", recover);
      if (img.complete && img.naturalWidth === 0 && src) recover();
    });
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var header = $("header"), toggle = $("navToggle"), menu = $("navMenu");
    if (!toggle || !menu) return;

    function setMenu(open) {
      menu.classList.toggle("open", open);
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }
    toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    // Close the menu after tapping any link inside it
    menu.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setMenu(false);
    });
    // Close when tapping anywhere outside the header
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("open") && header && !header.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  /* ---------- Smooth, eased scrolling ---------- */
  var scrollFrame = null;
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function cancelScroll() { if (scrollFrame) { window.cancelAnimationFrame(scrollFrame); scrollFrame = null; } }
  function smoothScrollTo(targetY) {
    cancelScroll();
    var startY = window.pageYOffset, dist = targetY - startY;
    if (reduceMotion || Math.abs(dist) < 2) { window.scrollTo(0, targetY); return; }
    var duration = Math.min(1200, Math.max(600, Math.abs(dist) * 0.45)), start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      window.scrollTo(0, startY + dist * easeInOutCubic(p));
      scrollFrame = p < 1 ? window.requestAnimationFrame(step) : null;
    }
    scrollFrame = window.requestAnimationFrame(step);
  }

  function initSmoothScroll() {
    var header = $("header");
    // If the visitor scrolls or presses a key mid-animation, let them take over
    ["wheel", "touchstart", "keydown"].forEach(function (evt) {
      window.addEventListener(evt, cancelScroll, { passive: true });
    });
    // Every in-page link (#about, #contact, ...) uses the eased scroll
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!link) return;
      var hash = link.getAttribute("href");
      // Placeholder links (href="#") do nothing, instead of opening a blank copy of the page
      if (hash === "#") { e.preventDefault(); return; }
      if (!hash || hash.length < 2) return;
      var target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight : 0;
      var y = hash === "#home" ? 0 : target.getBoundingClientRect().top + window.pageYOffset - offset + 1;
      smoothScrollTo(Math.max(0, y));
      if (window.history && history.replaceState) history.replaceState(null, "", hash);
    });
  }

  /* ---------- Header shadow + back-to-top (throttled with rAF) ---------- */
  function initScrollUI() {
    var header = $("header"), backToTop = $("backToTop"), ticking = false;
    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("scrolled", y > 20);
      if (backToTop) backToTop.classList.toggle("show", y > 500);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
    if (backToTop) backToTop.addEventListener("click", function () { smoothScrollTo(0); });
  }

  /* ---------- Active nav link while scrolling ---------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var navLinks = $$(".nav-link");
    var ids = ["home", "about", "experience", "training", "skills", "projects", "education", "learning", "certificates", "contact"];
    // Sections without their own nav link highlight the nearest related link
    var spyMap = { training: "experience", learning: "education" };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var activeId = spyMap[entry.target.id] || entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + activeId);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach(function (id) { var el = $(id); if (el) spy.observe(el); });
  }

  /* ---------- Fade-in on scroll (staggered) ---------- */
  function initReveal() {
    var els = $$(".reveal");
    // Without IntersectionObserver nothing is hidden, so nothing can get stuck invisible
    if (!els.length || !("IntersectionObserver" in window)) return;

    // After fading in, drop the reveal styles so hover effects stay instant and smooth
    function finish(el) {
      var done = false;
      function end() {
        if (done) return;
        done = true;
        el.classList.remove("reveal", "visible");
        el.style.removeProperty("--d");
      }
      el.addEventListener("transitionend", function onEnd(e) {
        if (e.target === el && e.propertyName === "opacity") { el.removeEventListener("transitionend", onEnd); end(); }
      });
      window.setTimeout(end, 2200);
    }

    // Items that come into view together appear one after another (a short stagger).
    // Items already above the screen (page reloaded or opened part-way down on a phone) show instantly.
    var io = new IntersectionObserver(function (entries, obs) {
      var n = 0;
      entries.forEach(function (entry) {
        var above = entry.boundingClientRect.top < 0;
        if (!entry.isIntersecting && !above) return;
        var el = entry.target;
        el.style.setProperty("--d", above ? "0ms" : Math.min(n++, 5) * 90 + "ms");
        el.classList.add("visible");
        finish(el);
        obs.unobserve(el);
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -5% 0px" });
    els.forEach(function (el) { io.observe(el); });

    // Only now is it safe to hide the not-yet-revealed items
    document.documentElement.classList.add("reveal-ready");
  }

  /* ---------- Soft light that follows the cursor on cards (mouse devices only) ---------- */
  function initCardGlow() {
    if (reduceMotion || !window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var card = null, x = 0, y = 0, pending = false;
    document.addEventListener("pointermove", function (e) {
      var c = e.target.closest ? e.target.closest(".card") : null;
      if (!c) return;
      card = c; x = e.clientX; y = e.clientY;
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(function () {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (x - r.left) + "px");
        card.style.setProperty("--my", (y - r.top) + "px");
        pending = false;
      });
    }, { passive: true });
  }

  /* ---------- Running (typing) text in the hero ---------- */
  // The words come from data-phrases in index.html (separated by | ).
  function initTyping() {
    var el = $("typed");
    if (!el || reduceMotion) return;
    var phrases = (el.getAttribute("data-phrases") || "").split("|")
      .map(function (s) { return s.trim(); }).filter(Boolean);
    if (phrases.length < 2) return;
    var pi = 0, ci = phrases[0].length, deleting = true;
    function tick() {
      var full = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = full.slice(0, ci);
        if (ci === full.length) { deleting = true; window.setTimeout(tick, 1800); return; }
        window.setTimeout(tick, 65);
      } else {
        ci--;
        el.textContent = full.slice(0, ci);
        if (ci <= 0) { deleting = false; pi = (pi + 1) % phrases.length; window.setTimeout(tick, 350); return; }
        window.setTimeout(tick, 32);
      }
    }
    window.setTimeout(tick, 2200); // let the first phrase show for a moment
  }

  /* ---------- Running strip: repeat the list so it loops seamlessly ---------- */
  function initTicker() {
    var ticker = document.querySelector(".ticker");
    var group = document.querySelector(".ticker-group");
    if (!ticker || !group || reduceMotion) return;
    for (var c = 0; c < 2; c++) {
      var clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      group.parentNode.appendChild(clone);
    }
    ticker.classList.add("ready");
  }

  /* ---------- Project filters ---------- */
  function initFilters() {
    var btns = $$(".filter-btn"), cards = $$(".project-card"), note = $("emptyNote");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter"), shown = 0;
        btns.forEach(function (b) { b.classList.toggle("active", b === btn); });
        cards.forEach(function (card) {
          var match = filter === "all" || card.getAttribute("data-status") === filter;
          card.hidden = !match;
          if (match) shown++;
        });
        if (note) note.hidden = shown !== 0;
      });
    });
  }

  /* ---------- Certificates: info card + full-size viewer ---------- */
  // Everything is built from the .cert-tab buttons in index.html. The image is
  // NOT shown on the page; it only loads when "View Certificate" is clicked.
  function initCertificates() {
    var tabs = $$(".cert-tab");
    var info = $("certInfo");
    if (!tabs.length || !info) return;

    var certCat = $("certCat"), certTitle = $("certTitle"), certIssuer = $("certIssuer"),
        certDate = $("certDate"), certCount = $("certCount");
    var certIndex = 0, changeTimer = null;
    var multiple = tabs.length > 1;
    var showcase = document.querySelector(".cert-showcase");
    if (showcase && !multiple) showcase.classList.add("single");

    function selectCert(i, animate) {
      i = (i + tabs.length) % tabs.length;
      var tab = tabs[i];

      function apply() {
        tabs.forEach(function (t, k) {
          var on = k === i;
          t.classList.toggle("active", on);
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
        });
        if (certCat) certCat.textContent = tab.getAttribute("data-category");
        if (certTitle) certTitle.textContent = tab.getAttribute("data-title");
        if (certIssuer) certIssuer.textContent = tab.getAttribute("data-issuer");
        if (certDate) certDate.textContent = tab.getAttribute("data-date");
        if (certCount) certCount.textContent = (i + 1) + " / " + tabs.length;
        certIndex = i;
      }

      window.clearTimeout(changeTimer);
      if (animate && !reduceMotion) {
        info.classList.add("is-changing");
        changeTimer = window.setTimeout(function () {
          apply();
          window.requestAnimationFrame(function () { info.classList.remove("is-changing"); });
        }, 300);
      } else {
        apply();
        info.classList.remove("is-changing");
      }
    }

    tabs.forEach(function (tab, i) { tab.addEventListener("click", function () { selectCert(i, true); }); });

    selectCert(0, false);

    /* ----- Full-size viewer (lightbox) ----- */
    var lb = $("lightbox");
    if (!lb) return;
    var lbImg = $("lbImg"), lbStage = $("lbStage"), lbMissing = $("lbMissing"), lbMissingFile = $("lbMissingFile"),
        lbZoom = $("lbZoom"), lbClose = $("lbClose"), lbPrev = $("lbPrev"), lbNext = $("lbNext"),
        lbCount = $("lbCount"), lbTitle = $("lbTitle"), lbMeta = $("lbMeta"), lbBackdrop = $("lbBackdrop");
    var current = 0, zoomed = false, lastFocus = null, closeTimer = null, touchX = null, lbToken = 0;

    lbPrev.hidden = lbNext.hidden = !multiple;
    if (!multiple) lb.classList.add("single");

    function setZoom(on) {
      zoomed = on;
      lbImg.classList.toggle("zoomed", on);
      lbZoom.textContent = on ? "−" : "+";
      lbZoom.setAttribute("aria-label", on ? "Zoom out" : "Zoom in");
      if (on) {
        lbStage.scrollLeft = (lbStage.scrollWidth - lbStage.clientWidth) / 2;
        lbStage.scrollTop = 0;
      }
    }

    function show(index) {
      current = (index + tabs.length) % tabs.length;
      var tab = tabs[current], src = tab.getAttribute("data-src"), token = ++lbToken;

      setZoom(false);
      lbImg.hidden = true; lbMissing.hidden = true; lbZoom.disabled = true;
      loadImage(src, function (url) {
        if (token !== lbToken) return;
        lbImg.setAttribute("src", url);
        lbImg.alt = tab.getAttribute("data-category") + " certificate";
        lbImg.hidden = false; lbZoom.disabled = false;
      }, function () {
        if (token !== lbToken) return;
        if (lbMissingFile) lbMissingFile.textContent = src;
        lbMissing.hidden = false;
      });

      lbTitle.textContent = tab.getAttribute("data-title");
      lbMeta.textContent = [
        tab.getAttribute("data-category"),
        "Issued by " + tab.getAttribute("data-issuer"),
        "Date received " + tab.getAttribute("data-date")
      ].join("  ·  ");
      lbCount.textContent = (current + 1) + " / " + tabs.length;
    }

    function openViewer(trigger) {
      window.clearTimeout(closeTimer);
      lastFocus = trigger;
      lb.hidden = false;
      show(certIndex);
      document.documentElement.classList.add("lb-open");
      window.requestAnimationFrame(function () { lb.classList.add("open"); });
      lbClose.focus();
    }

    function closeViewer() {
      lb.classList.remove("open");
      document.documentElement.classList.remove("lb-open");
      closeTimer = window.setTimeout(function () { lb.hidden = true; lbImg.removeAttribute("src"); }, 350);
      if (current !== certIndex) selectCert(current, false); // keep the card in sync
      if (lastFocus) lastFocus.focus();
    }

    var openBtn = $("certOpen");
    if (openBtn) openBtn.addEventListener("click", function () { openViewer(openBtn); });

    lbImg.addEventListener("click", function () { setZoom(!zoomed); });
    lbZoom.addEventListener("click", function () { setZoom(!zoomed); });
    lbClose.addEventListener("click", closeViewer);
    if (lbBackdrop) lbBackdrop.addEventListener("click", closeViewer);
    lbPrev.addEventListener("click", function () { show(current - 1); });
    lbNext.addEventListener("click", function () { show(current + 1); });

    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowLeft" && multiple) show(current - 1);
      else if (e.key === "ArrowRight" && multiple) show(current + 1);
      else if (e.key === "Tab") {
        // keep keyboard focus inside the viewer
        var f = $$("button:not([disabled]):not([hidden])", lb);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Swipe left/right on touch screens (only when not zoomed, so panning still works)
    lbStage.addEventListener("touchstart", function (e) {
      touchX = (!zoomed && e.touches.length === 1) ? e.touches[0].clientX : null;
    }, { passive: true });
    lbStage.addEventListener("touchend", function (e) {
      if (touchX === null || !multiple) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = $("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Contact form ---------- */
  // There is no backend, so by default the form opens the visitor's email app
  // (mailto). To send messages directly, see "Contact form" in the README.
  function initContactForm() {
    var form = $("contactForm"), statusEl = $("formStatus");
    if (!form || !statusEl) return;

    function setStatus(msg, type) {
      statusEl.textContent = msg;
      statusEl.className = "form-status " + (type || "");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      $$(".field", form).forEach(function (field) {
        var input = field.querySelector("input, textarea");
        var ok = input.value.trim() !== "" && (input.type !== "email" || /^\S+@\S+\.\S+$/.test(input.value));
        field.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) { setStatus("Please fill in all fields with valid information.", "err"); return; }

      var data = new FormData(form);
      var body = "Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\n\n" + data.get("message");
      var url = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(data.get("subject")) +
        "&body=" + encodeURIComponent(body);

      window.location.href = url;
      setStatus("Opening your email app. If nothing opens, email me directly.", "ok");
      form.reset();
    });
  }

  /* ---------- Start everything (the menu first, since it matters most) ---------- */
  safe("menu", initMenu);
  safe("smooth scroll", initSmoothScroll);
  safe("scroll effects", initScrollUI);
  safe("images", initImages);
  safe("reveal", initReveal);
  safe("scroll spy", initScrollSpy);
  safe("card glow", initCardGlow);
  safe("typing text", initTyping);
  safe("running strip", initTicker);
  safe("project filters", initFilters);
  safe("certificates", initCertificates);
  safe("footer year", initYear);
  safe("contact form", initContactForm);
})();
