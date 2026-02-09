/**
 * main.js — Handles homepage blog listing, filtering, and shared interactions.
 */

(function () {
  'use strict';

  // =========================================
  // HOMEPAGE: Blog listing & filters
  // =========================================
  const blogListEl = document.getElementById('blogList');
  const topicFiltersEl = document.getElementById('topicFilters');
  const postCountEl = document.getElementById('postCount');

  if (blogListEl && typeof POSTS !== 'undefined') {
    initHomepage();
  }

  function initHomepage() {
    // Gather all unique topics
    const topicCounts = {};
    POSTS.forEach(post => {
      post.topics.forEach(topic => {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
      });
    });

    // Render topic filters
    const sortedTopics = Object.keys(topicCounts).sort();
    topicFiltersEl.innerHTML = sortedTopics.map(topic => `
      <li>
        <label>
          <input type="checkbox" value="${topic}" onchange="filterPosts()">
          ${topic}
          <span class="filter-count">(${topicCounts[topic]})</span>
        </label>
      </li>
    `).join('');

    // Render posts
    renderPosts(POSTS);
  }

  // Make filterPosts available globally for the onchange handler
  window.filterPosts = function () {
    const checked = Array.from(
      topicFiltersEl.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value);

    if (checked.length === 0) {
      renderPosts(POSTS);
    } else {
      const filtered = POSTS.filter(post =>
        post.topics.some(t => checked.includes(t))
      );
      renderPosts(filtered);
    }
  };

  function renderPosts(posts) {
    postCountEl.textContent = `(${posts.length})`;

    blogListEl.innerHTML = posts.map(post => `
      <li class="blog-item" data-topics='${JSON.stringify(post.topics)}'>
        <a href="${post.url}" class="blog-item-link">
          <span class="blog-date">
            <span class="dot"></span>
            ${post.date}
          </span>
          <span class="blog-title">${post.title}</span>
          <span class="blog-expand">+</span>
        </a>
      </li>
    `).join('');
  }

  // =========================================
  // SIDEBAR: Collapsible sections
  // =========================================
  window.toggleSection = function (titleEl) {
    titleEl.classList.toggle('collapsed');
    const list = titleEl.nextElementSibling;
    if (list) {
      list.style.display = list.style.display === 'none' ? '' : 'none';
    }
  };

  // =========================================
  // POST PAGE: Active TOC tracking
  // =========================================
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length > 0) {
    const headings = [];
    tocLinks.forEach(link => {
      const id = link.getAttribute('href').replace('#', '');
      const heading = document.getElementById(id);
      if (heading) headings.push({ el: heading, link });
    });

    function updateActiveTOC() {
      let active = headings[0];
      for (const h of headings) {
        if (h.el.getBoundingClientRect().top <= 100) {
          active = h;
        }
      }
      tocLinks.forEach(l => l.classList.remove('active'));
      if (active) active.link.classList.add('active');
    }

    window.addEventListener('scroll', updateActiveTOC, { passive: true });
    updateActiveTOC();
  }

})();
