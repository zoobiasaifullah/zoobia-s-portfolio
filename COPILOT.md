# Brief for Copilot

Goal: keep this site pixel-faithful to the Figma design while staying fast and accessible. Do not add a UI framework, Tailwind, or animation libraries.

## Stack
Astro 5 static output, scoped component CSS, global tokens, one small script (`src/scripts/ui.ts`). Images through `astro:assets` (`<Media>`). Deploy: GitHub Pages via Actions.

## Structure
- `src/data/*`: ALL copy lives here. Components contain no text. Edit content in data files.
- `src/components/*`: Hero, Work, ProjectCard, Research, About, Polaroid, Experience, ContactCard, Footer, Nav, ThemeToggle, CaseBlock (renders every case-study block type), Walkthrough (Lyra tabs).
- `src/pages/index.astro`, `src/pages/work/[slug].astro`, `404.astro`.
- `src/styles/tokens.css`: colors (light and dark), type, motion tokens. Never hard-code a color.

## Rules
- Tokens only. Dark mode is `:root[data-theme=dark]`, set before paint by an inline script in `Base.astro`.
- Motion: ease-out-quint, durations from tokens (90/160/250/300/450/600ms), 80ms stagger, 16px rise, animate only opacity and transform. Reveal once on scroll. `prefers-reduced-motion`: opacity-only 150ms. No autoplay.
- Accessibility: WCAG AA contrast, 44px touch targets, visible 2px focus ring, skip link, native `<dialog>` mobile menu, tabs follow the ARIA pattern with arrow keys, new-tab links say so for screen readers.
- Breakpoints: 1279 (gutter 64), 1023 (stack), 839 (mobile nav), 767 (mobile, gutter 16).
- Performance: minimal client JS, lazy-load below-the-fold images, hero image eager, self-hosted woff2 fonts with preload.

## NDA rules for the Amplify case study (never break)
No participant counts, product or people names, usage metrics or strategy. Do not reveal confidential findings. Do not invent outcomes. Keep a positive tone.

## Open TODOs
See README "Before you launch".
