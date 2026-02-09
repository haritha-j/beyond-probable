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
    date: '2025.07.29',
    title: 'Beyond Venn Diagrams: diving into UpSet Plots',
    url: 'posts/beyond-venn-diagrams-upset-plots.html',
    topics: ['Data Visualization', 'Research'],
    type: 'article'
  }
];
