// Site-wide behavior. Small, dependency-free, and safe with reduced motion.
const root = document.documentElement;
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Theme toggle ---------- */
function syncToggle() {
  const dark = root.getAttribute('data-theme') === 'dark';
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(dark));
    b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}
const viewTransitionDocument = document as Document & {
  startViewTransition?: (updateCallback: () => void) => unknown;
};

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((b) => {
  b.addEventListener('animationend', () => b.classList.remove('is-switching'));
  b.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    const switchTheme = () => {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
      syncToggle();
    };

    b.classList.remove('is-switching');
    void b.offsetWidth;
    b.classList.add('is-switching');
    if (viewTransitionDocument.startViewTransition && !reduceMotion()) {
      viewTransitionDocument.startViewTransition(switchTheme);
    }
    else switchTheme();
  });
});
syncToggle();

/* ---------- Mobile menu (native <dialog>) ---------- */
const dialog = document.querySelector<HTMLDialogElement>('[data-menu]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
if (dialog && openBtn) {
  openBtn.addEventListener('click', () => dialog.showModal());
  dialog.querySelector('[data-menu-close]')?.addEventListener('click', () => dialog.close());
  // Click on the scrim (outside the sheet) closes it.
  dialog.addEventListener('click', (e) => {
    const r = dialog.getBoundingClientRect();
    if (e.clientY > r.bottom || e.clientY < r.top || e.clientX < r.left || e.clientX > r.right) dialog.close();
  });
  dialog.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('close', () => openBtn.focus());
  matchMedia('(min-width: 840px)').addEventListener('change', (m) => m.matches && dialog.open && dialog.close());
}

/* ---------- Anchor scrolling: 500ms ease-in-out (jump when reduced motion) ---------- */
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
function scrollToY(y: number) {
  if (reduceMotion()) return window.scrollTo(0, y);
  const start = window.scrollY, delta = y - start, t0 = performance.now(), dur = 500;
  root.style.scrollBehavior = 'auto';
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, start + delta * easeInOut(p));
    if (p < 1) requestAnimationFrame(step);
    else root.style.scrollBehavior = '';
  };
  requestAnimationFrame(step);
}
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
  const url = new URL(a.href, location.href);
  if (url.pathname !== location.pathname || url.origin !== location.origin) return;
  const id = decodeURIComponent(url.hash.slice(1));
  const el = id ? document.getElementById(id) : null;
  if (!el && id) return;
  e.preventDefault();
  const y = el ? el.getBoundingClientRect().top + window.scrollY - 72 : 0;
  scrollToY(Math.max(0, y));
  history.pushState(null, '', url.hash || location.pathname);
  el?.setAttribute('tabindex', '-1');
  el?.focus({ preventScroll: true });
});

/* ---------- Reveal on scroll: once, 15% visible, siblings staggered by --i ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion() || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Scroll spy for the nav (home page only) ---------- */
const spyLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link[data-section]'));
const sections = spyLinks.map((l) => document.getElementById(l.dataset.section!)).filter(Boolean) as HTMLElement[];
if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        spyLinks.forEach((l) => l.removeAttribute('aria-current'));
        spyLinks.find((l) => l.dataset.section === en.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((s) => spy.observe(s));
}
