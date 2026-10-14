/* ============================================================
   Expert Movers Packer — interactions
   Vanilla JS: mobile navigation, blog filters, nav state.
   The site remains fully readable and navigable if JS fails.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  function closeNav() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  function openNav() {
    mainNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.contains("is-open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close when a nav link is tapped
    mainNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeNav();
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    // Reset if the viewport grows past the mobile breakpoint
    var mq = window.matchMedia("(min-width: 901px)");
    function handleBreakpoint(e) {
      if (e.matches) {
        closeNav();
      }
    }
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleBreakpoint);
    }
  }

  /* ---------- Blog category filter ---------- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var blogCards = document.querySelectorAll(".blog-card");
  var filterStatus = document.getElementById("filter-status");

  function labelFor(filter) {
    var btn = document.querySelector('.filter-btn[data-filter="' + filter + '"]');
    return btn ? btn.textContent.trim() : filter;
  }

  function applyFilter(filter) {
    var visibleCount = 0;

    blogCards.forEach(function (card) {
      var match = filter === "all" || card.getAttribute("data-category") === filter;
      card.hidden = !match;
      if (match) visibleCount += 1;
    });

    filterButtons.forEach(function (btn) {
      var active = btn.getAttribute("data-filter") === filter;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (filterStatus) {
      var noun = visibleCount === 1 ? "article" : "articles";
      var scope = filter === "all" ? "all" : "in \u201c" + labelFor(filter) + "\u201d";
      filterStatus.textContent =
        "Showing " + visibleCount + " " + noun + " " + scope + ".";
    }
  }

  if (filterButtons.length && blogCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  /* ---------- Highlight current page in nav (safety net) ----------
     The aria-current attribute is set in the HTML; this keeps it
     correct if pages are renamed or served from a sub-path. */
  try {
    var path = window.location.pathname.split("/").pop() || "index.html";
    var navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (href.indexOf("#") !== -1) return; // anchor links keep the HTML default
      var page = href.split("/").pop();
      if (page === path || (path === "" && page === "index.html")) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  } catch (err) {
    /* Non-critical: leave the HTML defaults in place. */
  }
})();
