import { defineConfig } from 'astro/config';

// GitHub Pages notes:
//  - Repo named <username>.github.io  -> leave `base` out.
//  - Project repo (username.github.io/repo-name) -> set base: '/repo-name'.
//  - Custom domain -> set `site` to it and leave `base` out.
// The deploy workflow passes SITE and BASE as env vars, so you rarely edit this file.
const site = process.env.SITE || 'https://zoobiasaifullah.github.io';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  compressHTML: true,
});
