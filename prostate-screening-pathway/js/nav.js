/* =====================================================
   Prostate Screening Pathway — Shared Navigation JS
   ===================================================== */

(function () {
  'use strict';

  // Mobile menu toggle
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active nav link based on current page
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Accordion functionality
  document.querySelectorAll('.accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var body = this.nextElementSibling;
      var isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-body').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.accordion-btn').forEach(function (b) { b.classList.remove('open'); });
      // Toggle clicked
      if (!isOpen) {
        body.classList.add('open');
        this.classList.add('open');
      }
    });
  });

})();
