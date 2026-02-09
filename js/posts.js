/**
 * Blog posts data — all posts defined here power the homepage listing.
 *
 * To add a new post, add an entry to the POSTS array.
 * Fields:
 *   date     — publish date in YYYY.MM.DD format
 *   title    — post title shown on the listing
 *   url      — relative path from root to the post HTML file
 *   topics   — array of topic tags for filtering
 *   type     — "article" (text-heavy) or "interactive" (visual/embed-heavy)
 */

const POSTS = [
  {
    date: '2026.02.05',
    title: 'Understanding the architecture of modern web applications',
    url: 'posts/architecture-of-modern-web-apps.html',
    topics: ['Technology', 'Web Development'],
    type: 'article'
  },
  {
    date: '2026.01.20',
    title: 'Visualizing sorting algorithms',
    url: 'posts/visualizing-sorting-algorithms.html',
    topics: ['Interactive', 'Computer Science'],
    type: 'interactive'
  },
  {
    date: '2026.01.10',
    title: 'The quiet art of maintaining software',
    url: 'posts/the-quiet-art-of-maintaining-software.html',
    topics: ['Engineering', 'Best Practices'],
    type: 'article'
  },
  {
    date: '2025.12.18',
    title: 'Building a real-time collaborative text editor from scratch',
    url: 'posts/real-time-collaborative-editor.html',
    topics: ['Interactive', 'Web Development'],
    type: 'interactive'
  },
  {
    date: '2025.12.01',
    title: 'Why I still write plain HTML',
    url: 'posts/why-i-still-write-plain-html.html',
    topics: ['Web Development', 'Opinion'],
    type: 'article'
  },
  {
    date: '2025.11.14',
    title: 'Exploring generative art with JavaScript and Canvas',
    url: 'posts/generative-art-javascript-canvas.html',
    topics: ['Interactive', 'Creative Coding'],
    type: 'interactive'
  },
  {
    date: '2025.10.28',
    title: 'Lessons from a decade of shipping side projects',
    url: 'posts/lessons-decade-side-projects.html',
    topics: ['Engineering', 'Personal'],
    type: 'article'
  },
  {
    date: '2025.10.05',
    title: 'Mapping every bus route in the city: a data visualization',
    url: 'posts/mapping-bus-routes-data-viz.html',
    topics: ['Interactive', 'Data'],
    type: 'interactive'
  },
  {
    date: '2025.09.20',
    title: 'The case for boring technology',
    url: 'posts/the-case-for-boring-technology.html',
    topics: ['Technology', 'Opinion'],
    type: 'article'
  },
  {
    date: '2025.09.01',
    title: 'An interactive guide to CSS Grid layout',
    url: 'posts/interactive-guide-css-grid.html',
    topics: ['Interactive', 'Web Development'],
    type: 'interactive'
  },
  {
    date: '2025.08.15',
    title: 'How databases choose query execution plans',
    url: 'posts/database-query-execution-plans.html',
    topics: ['Technology', 'Databases'],
    type: 'article'
  },
  {
    date: '2025.07.30',
    title: 'Reading code is harder than writing it',
    url: 'posts/reading-code-harder-than-writing.html',
    topics: ['Engineering', 'Best Practices'],
    type: 'article'
  }
];
