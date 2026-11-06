/* SYPcoin public notice board. Read-only: no public posting endpoint or forms. */
(() => {
  'use strict';
  const latest = document.querySelector('[data-news-latest]');
  const archive = document.querySelector('[data-news-archive]');
  if (!latest && !archive) return;
  const en = document.documentElement.lang.toLowerCase().startsWith('en');
  const lang = en ? 'en' : 'es';

  const element = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = String(value);
    return node;
  };

  const formatDate = (iso) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
    const date = new Date(iso + 'T12:00:00Z');
    if (Number.isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat(en ? 'en-GB' : 'es-ES', {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    }).format(date);
  };

  const createEntry = (entry, compact) => {
    const article = element('article', compact ? 'newsboard-card newsboard-latest' : 'newsboard-card');
    if (!compact) article.id = entry.id;
    const meta = element('div', 'newsboard-meta');
    const time = element('time', '', formatDate(entry.date));
    time.dateTime = entry.date;
    meta.append(time, element('span', 'newsboard-label mono', entry.milestone));
    article.append(meta);
    article.append(element(compact ? 'h3' : 'h2', 'newsboard-title', entry.title[lang]));
    article.append(element('p', 'newsboard-summary', entry.summary[lang]));
    article.append(element('p', 'newsboard-limits', entry.limits[lang]));
    const detail = element('a', 'newsboard-link', en ? 'Read milestone and limits' : 'Ver hito y sus límites');
    detail.href = entry.link[lang];
    article.append(detail);
    return article;
  };

  const valid = (entry) => entry
    && /^\d{4}-\d{2}-\d{2}$/.test(entry.date || '')
    && /^[A-Za-z0-9-]+$/.test(entry.id || '')
    && /^H\d+$/.test(entry.milestone || '')
    && ['es','en'].every(code => entry.title?.[code] && entry.summary?.[code] && entry.limits?.[code]
      && new RegExp('^/(?:en/)?hitos/#h\\d+$').test(entry.link?.[code] || ''));

  fetch('/data/novedades.json', {cache: 'no-cache'})
    .then(response => { if (!response.ok) throw new Error('News feed unavailable'); return response.json(); })
    .then(feed => {
      if (!feed || !Array.isArray(feed.items) || !feed.items.length || !feed.items.every(valid)) return;
      if (new Set(feed.items.map(item => item.id)).size !== feed.items.length) return;
      // Feed order is deliberate: newest editorial publication first, older entries retained.
      if (latest) latest.replaceChildren(createEntry(feed.items[0], true));
      if (archive) {
        const fragment = document.createDocumentFragment();
        feed.items.forEach(item => fragment.append(createEntry(item, false)));
        archive.replaceChildren(fragment);
      }
    })
    .catch(() => { /* Keep accessible, pre-rendered fallback content. */ });
})();
