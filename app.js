
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
const isEnglishPage = document.documentElement.lang.toLowerCase().startsWith('en');
const EnglishStageLabels = Object.freeze({
  development: { label: 'IN DEVELOPMENT', aria: 'In development' },
  advanced: { label: 'ADVANCED TESTING', aria: 'Advanced testing' },
  ready: { label: 'READY FOR LAUNCH', aria: 'Ready for launch' }
});
if (release) {
  const localized = isEnglishPage ? EnglishStageLabels[PROJECT_RELEASE_STAGE] : release;
  document.querySelectorAll('[data-project-status]').forEach((el) => {
    el.setAttribute('data-stage', PROJECT_RELEASE_STAGE);
    el.setAttribute('aria-label', (isEnglishPage ? 'Project status: ' : 'Estado del proyecto: ') + localized.aria);
    const label = el.querySelector('[data-stage-label]');
    if (label) label.textContent = localized.label;
  });
}

const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');
const year = document.querySelector('[data-year]');

const closeMobileNav = () => {
  if (!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
};

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

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const wasOpen = nav.classList.contains('open');
      closeMobileNav();
      if (wasOpen) toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMobileNav();
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
