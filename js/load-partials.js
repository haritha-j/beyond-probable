/**
 * load-partials.js — Load and inject shared nav and footer partials
 */

(function() {
  'use strict';

  // Determine the base path based on current page location
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/posts/')) {
      return '../';
    }
    return './';
  }

  const basePath = getBasePath();
  const currentPage = window.location.pathname;

  // Load nav
  fetch(basePath + 'partials/nav.html')
    .then(response => response.text())
    .then(html => {
      const nav = document.getElementById('nav-placeholder');
      if (nav) {
        nav.innerHTML = html;
        // Set active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (currentPage === href || currentPage.endsWith(href)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
          // Fix relative paths for nested pages
          if (basePath === '../') {
            link.setAttribute('href', href === '/' ? '../index.html' : '..' + href);
          }
        });
      }
    });

  // Load footer
  fetch(basePath + 'partials/footer.html')
    .then(response => response.text())
    .then(html => {
      const footer = document.getElementById('footer-placeholder');
      if (footer) {
        footer.innerHTML = html;
        // Fix relative paths for nested pages
        if (basePath === '../') {
          const footerLinks = document.querySelectorAll('.footer-link');
          footerLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.setAttribute('href', href === '/' ? '../index.html' : '..' + href);
          });
        }
      }
    });
})();
