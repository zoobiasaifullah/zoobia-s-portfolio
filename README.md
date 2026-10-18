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
1. Export images from Figma into `src/assets/images/` (names listed in that folder's README).
2. Replace every `TODO` in `src/data/site.ts` (LinkedIn, X, resume PDF in `public/`, ACM paper link).
3. Lyra: add the research board link and the real quote in `src/data/case-studies/lyra.ts` (the draft quote is hidden in production).
4. Content checks: Amplify timeline (3 vs 4 weeks), NDA-safe wording in the Experience section, Lyra numbers vs resume.

## Deploy to GitHub Pages
1. Push to a repo, branch `main`.
2. Settings, Pages, Source: GitHub Actions.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. It sets `SITE` and `BASE` automatically.
