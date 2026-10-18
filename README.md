# Zoobia Saifullah portfolio

Astro static site. Vanilla CSS and a tiny script (about 1 KB gzipped of client JS). No framework runtime.

## Run it
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview
```

## Before you launch
1. Images and the Bucketize prototype video live in `src/assets/images/` (names listed in that folder's README).
2. Links (LinkedIn, GitHub, resume PDF in `public/`, ACM paper) are set in `src/data/site.ts`.
3. Lyra: replace the placeholder quote in `src/data/case-studies/lyra.ts` (it is visible on purpose), and add a research board link if you want one.
4. Keep Experience and case study wording NDA safe.

## Deploy to GitHub Pages
1. Push to a repo, branch `main`.
2. Settings, Pages, Source: GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. It sets `SITE` and `BASE` automatically.
