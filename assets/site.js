/* ===== Moore Memories — shared header/footer + interactions (all pages) ===== */
(function () {
  const NAV = [
    { label: 'The Home', href: 'the-home.html' },
    { label: 'Gallery', href: 'gallery.html' },
    { label: 'Resort & Area', href: 'resort-area.html' },
    { label: 'Rates', href: 'rates.html' },
    { label: 'Plan Your Stay', href: 'plan.html' },
  ];
  const PHONE = '(843) 555-0142';
  const EMAIL = 'stay@moorememories.com';
  const PRICE = '$70–$300';
  const here = (location.pathname.split('/').pop() || 'index.html');
  const isActive = (href) => href === here;

  /* Favicons (PNG + apple-touch) sitewide */
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">' +
    '<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">');

  /* ---------- HEADER ---------- */
  const header = document.createElement('header');
  header.id = 'header';
  header.className = 'site-header fixed top-0 inset-x-0 z-50';
  header.innerHTML = `
    <nav class="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
      <a href="index.html" class="logo leading-none">
        <span class="block font-display text-3xl font-semibold tracking-wide">Moore Memories</span>
        <span class="block text-[10px] uppercase tracking-[.28em] opacity-75 mt-1">Ocean Lakes · Site 1669</span>
      </a>
      <div class="hidden lg:flex items-center gap-8 text-sm font-medium">
        ${NAV.map(n => `<a href="${n.href}" class="navlink${isActive(n.href) ? ' active' : ''}">${n.label}</a>`).join('')}
        <a href="rates.html#book" class="btn-brass px-5 py-2.5 text-sm tracking-wide">Check Availability</a>
      </div>
      <button id="menuBtn" class="lg:hidden p-2 -mr-2" aria-label="Open menu">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </nav>
    <div id="mobileMenu" class="hidden lg:hidden bg-cream text-ink border-t border-sand-deep px-6 py-5 space-y-1 text-sm font-medium">
      ${NAV.map(n => `<a href="${n.href}" class="block py-2.5">${n.label}</a>`).join('')}
      <a href="rates.html#book" class="block btn-brass px-5 py-3 text-center mt-2">Check Availability</a>
    </div>`;
  document.body.prepend(header);

  /* ---------- FOOTER ---------- */
  const footer = document.createElement('footer');
  footer.className = 'bg-pine-deep text-sand/70 pt-16 pb-28 lg:pb-12';
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-10">
      <div>
        <p class="font-display text-3xl text-white">Moore Memories</p>
        <p class="mt-3 text-sm max-w-xs leading-relaxed">Privately owned tiny home · Site 1669 (Starfish Rd) · Ocean Lakes Family Campground, 6001 South Kings Hwy, Myrtle Beach, SC 29575.</p>
      </div>
      <div class="text-sm">
        <p class="text-[10px] uppercase tracking-[.22em] text-brass-light mb-3">Explore</p>
        <a href="the-home.html" class="block py-1.5 text-sand hover:text-brass-light transition">The Home</a>
        <a href="gallery.html" class="block py-1.5 text-sand hover:text-brass-light transition">Gallery</a>
        <a href="resort-area.html" class="block py-1.5 text-sand hover:text-brass-light transition">Resort &amp; Area</a>
        <a href="plan.html" class="block py-1.5 text-sand hover:text-brass-light transition">Plan Your Stay</a>
      </div>
      <div class="text-sm">
        <p class="text-[10px] uppercase tracking-[.22em] text-brass-light mb-3">Reserve</p>
        <a href="rates.html#book" class="block py-1.5 text-sand hover:text-brass-light transition">Check Availability</a>
        <a href="rates.html" class="block py-1.5 text-sand hover:text-brass-light transition">Rates</a>
        <p class="py-1.5"><a href="tel:${PHONE.replace(/[^0-9+]/g,'')}" class="text-sand hover:text-brass-light transition">${PHONE}</a></p>
        <p class="py-1.5"><a href="mailto:${EMAIL}" class="text-sand hover:text-brass-light transition">${EMAIL}</a></p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-sand/40">
      <p>© <span class="yr"></span> Moore Memories · Privately owned rental at Ocean Lakes Family Campground — not affiliated with campground management. Rates &amp; guest reviews shown are placeholders pending the owner's confirmation.</p>
      <p class="shrink-0 sm:text-right">Designed by <span class="text-brass-light font-medium tracking-wide">Dylan Reed</span></p>
    </div>`;
  document.body.appendChild(footer);

  /* ---------- MOBILE STICKY BOOKING BAR (skip on rates: the booking form is already the page, so the bar is redundant and would overlay form fields) ---------- */
  if (here !== 'rates.html') {
    const sticky = document.createElement('div');
    sticky.className = 'lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-sand-deep px-4 py-3 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,.08)]';
    sticky.innerHTML = `
      <div>
        <p class="font-display text-xl text-pine leading-none tnum">${PRICE}<span class="text-xs text-ink/45 font-sans"> /night</span></p>
        <p class="text-[11px] text-ink/55 mt-0.5">Sleeps 6 · by season</p>
      </div>
      <a href="rates.html#book" class="btn-brass px-6 py-3 text-sm">Check Availability</a>`;
    sticky.style.paddingBottom = 'calc(0.75rem + env(safe-area-inset-bottom))';
    document.body.appendChild(sticky);
  }

  /* ---------- MOCKUP BADGE (compact corner; delete this block before launch) ---------- */
  const badge = document.createElement('button');
  badge.type = 'button';
  badge.className = `fixed ${here === 'rates.html' ? 'bottom-4' : 'bottom-24'} lg:bottom-4 left-4 z-30 bg-ink text-sand text-[11px] leading-none px-3 py-2 rounded-full shadow-lg border border-white/10 cursor-pointer select-none transition-opacity duration-300`;
  badge.title = 'Design draft — rates & reviews are still placeholder. Tap to hide.';
  badge.setAttribute('aria-label', 'Design draft — rates and reviews are still placeholder. Tap to hide.');
  badge.innerHTML = '✦ Draft preview &nbsp;✕';
  badge.addEventListener('click', () => badge.remove());
  document.body.appendChild(badge);
  /* hide the badge while the footer is in view so it never covers footer / credit content */
  const onBadgeScroll = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 160;
    badge.style.opacity = nearBottom ? '0' : '';
    badge.style.pointerEvents = nearBottom ? 'none' : '';
  };
  onBadgeScroll();
  window.addEventListener('scroll', onBadgeScroll, { passive: true });

  /* ---------- LIGHTBOX ---------- */
  const lb = document.createElement('div');
  lb.id = 'lb';
  lb.className = 'hidden fixed inset-0 z-[60] bg-pine-deep/98 backdrop-blur-sm flex items-center justify-center';
  lb.innerHTML = `
    <button data-lb-close class="absolute top-5 right-6 text-white/80 hover:text-white text-3xl">&times;</button>
    <button data-lb-prev class="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3" aria-label="Previous"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg></button>
    <figure class="text-center px-14">
      <img id="lbImg" src="" alt="" class="max-h-[78vh] max-w-[88vw] rounded-lg shadow-2xl mx-auto" />
      <figcaption id="lbCap" class="text-sand/70 text-sm mt-4"></figcaption>
    </figure>
    <button data-lb-next class="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3" aria-label="Next"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg></button>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('#lbImg'), lbCap = lb.querySelector('#lbCap'), lbClose = lb.querySelector('[data-lb-close]');
  lbClose.setAttribute('aria-label', 'Close');
  const allThumbs = [...document.querySelectorAll('[data-lb]')];
  const metaFor = el => ({ src: el.dataset.full || (el.querySelector('img') || {}).src || el.getAttribute('src'), cap: el.dataset.cap || '' });
  const isShown = el => el.offsetParent !== null;            // false once a filter sets display:none — keeps nav in sync with the visible grid
  let view = [], idx = 0, lastTrigger = null;                // `view` = the visible thumbs captured at open time
  const renderLB = () => { const el = view[idx]; if (!el) return; const g = metaFor(el); lbImg.src = g.src; lbImg.alt = g.cap; lbCap.textContent = view.length > 1 ? `${g.cap} · ${idx + 1} / ${view.length}` : g.cap; };
  window.openLB = (el) => { view = allThumbs.filter(isShown); idx = Math.max(0, view.indexOf(el)); lastTrigger = el; renderLB(); lb.classList.remove('hidden'); document.body.style.overflow = 'hidden'; lbClose.focus(); };
  window.closeLB = () => { lb.classList.add('hidden'); document.body.style.overflow = ''; if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; } };
  window.stepLB = (d) => { if (!view.length) return; idx = (idx + d + view.length) % view.length; renderLB(); };
  allThumbs.forEach(el => {
    el.style.cursor = 'pointer';
    if (el.tagName !== 'BUTTON' && el.tagName !== 'A') {     // the <div> cards: make them keyboard-operable
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.dataset.cap ? `View photo: ${el.dataset.cap}` : 'View photo');
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.openLB(el); } });
    }
    el.addEventListener('click', () => window.openLB(el));
  });
  lbClose.addEventListener('click', window.closeLB);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => window.stepLB(-1));
  lb.querySelector('[data-lb-next]').addEventListener('click', () => window.stepLB(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) window.closeLB(); });
  document.addEventListener('keydown', (e) => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape') window.closeLB();
    if (e.key === 'ArrowRight') window.stepLB(1);
    if (e.key === 'ArrowLeft') window.stepLB(-1);
  });

  /* ---------- HEADER SCROLL STATE (solid on sub-pages without a hero) ---------- */
  const hasHero = !!document.querySelector('.hero');
  if (hasHero) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  } else {
    header.classList.add('scrolled');
  }

  /* ---------- MOBILE MENU ---------- */
  const menuBtn = header.querySelector('#menuBtn'), mob = header.querySelector('#mobileMenu');
  menuBtn.addEventListener('click', () => mob.classList.toggle('hidden'));
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.add('hidden')));

  /* ---------- SCROLL REVEAL ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- YEAR ---------- */
  document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());
})();
