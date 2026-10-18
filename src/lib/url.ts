// Prefix internal links with Astro's base path so the site works on GitHub Pages project URLs.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path: string): string => {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
};
