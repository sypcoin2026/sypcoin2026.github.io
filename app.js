
/**
 * SYPcoin public release-stage label.
 * Change ONLY this value after independently justified milestone review.
 * development -> red / EN DESARROLLO
 * advanced    -> orange / EN PRUEBAS AVANZADAS
 * ready       -> green / LISTA PARA LANZAMIENTO
 * Visual status is informational, NOT proof of security or a live network.
 */
const PROJECT_RELEASE_STAGE = 'development';
const PROJECT_RELEASE_STAGES = Object.freeze({
  development: { label: 'EN DESARROLLO', aria: 'En desarrollo' },
  advanced: { label: 'EN PRUEBAS AVANZADAS', aria: 'En pruebas avanzadas' },
  ready: { label: 'LISTA PARA LANZAMIENTO', aria: 'Lista para lanzamiento' }
});
const release = PROJECT_RELEASE_STAGES[PROJECT_RELEASE_STAGE];
if (release) {
  document.querySelectorAll('[data-project-status]').forEach((el) => {
    el.setAttribute('data-stage', PROJECT_RELEASE_STAGE);
    el.setAttribute('aria-label', 'Estado del proyecto: ' + release.aria);
    const label = el.querySelector('[data-stage-label]');
    if (label) label.textContent = release.label;
  });
}

const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');
const year = document.querySelector('[data-year]');

const syncHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 18);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('revealed'));
}
