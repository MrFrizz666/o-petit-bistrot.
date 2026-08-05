/* Interactions de navigation, de carte, d'avis et de réservation. */
document.addEventListener('DOMContentLoaded', () => {
  /* Le fichier contenu-client.js alimente les informations éditables du site. */
  const setContent = (selector, value) => { const element = document.querySelector(selector); if (element && value) element.innerHTML = value; };
  setContent('[data-content="hero-small"]', BISTROT_CONTENT.hero.smallTitle);
  setContent('[data-content="hero-title"]', BISTROT_CONTENT.hero.title);
  setContent('[data-content="hero-text"]', BISTROT_CONTENT.hero.text);
  setContent('[data-content="story-title"]', BISTROT_CONTENT.story.title);
  setContent('[data-content="story-first"]', BISTROT_CONTENT.story.firstParagraph);
  setContent('[data-content="story-second"]', BISTROT_CONTENT.story.secondParagraph);
  setContent('[data-content="tagline"]', BISTROT_CONTENT.tagline);
  document.querySelector('[data-content="instagram"]').href = BISTROT_CONTENT.instagram;
  document.querySelector('[data-content="facebook"]').href = BISTROT_CONTENT.facebook;
  document.title = `${BISTROT_CONTENT.restaurant} | Cuisine française de saison`;
  const contactBlocks = document.querySelectorAll('.contact-columns > div');
  contactBlocks[0].querySelector('p').innerHTML = BISTROT_CONTENT.addressLines.join('<br>');
  contactBlocks[0].querySelector('a').href = `https://maps.google.com/?q=${encodeURIComponent(BISTROT_CONTENT.mapsAddress)}`;
  contactBlocks[1].querySelector('p').innerHTML = BISTROT_CONTENT.hours.join('<br>');
  const contactLinks = contactBlocks[2].querySelectorAll('a');
  contactLinks[0].textContent = BISTROT_CONTENT.phone; contactLinks[0].href = `tel:${BISTROT_CONTENT.phoneLink}`;
  contactLinks[1].textContent = BISTROT_CONTENT.email; contactLinks[1].href = `mailto:${BISTROT_CONTENT.email}`;
  Object.entries(BISTROT_CONTENT.menu).forEach(([category, dishes]) => {
    document.getElementById(category).innerHTML = dishes.map(dish => `<div class="dish"><div><h3>${dish.name}</h3><p>${dish.description}</p></div><strong>${dish.price}</strong></div>`).join('');
  });
  const reviewContainer = document.querySelector('.review-track');
  const dotsContainer = document.querySelector('.slider-dots');
  reviewContainer.innerHTML = BISTROT_CONTENT.reviews.map((review, index) => `<article class="review${index === 0 ? ' active' : ''}"><div class="stars">★★★★★</div><blockquote>${review.text}</blockquote><p>${review.author} <span>· ${review.source}</span></p></article>`).join('');
  dotsContainer.innerHTML = BISTROT_CONTENT.reviews.map((_, index) => `<button${index === 0 ? ' class="active"' : ''} aria-label="Avis ${index + 1}"></button>`).join('');
  const header = document.querySelector('.site-header');
  const topButton = document.querySelector('.back-to-top');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const refreshHeader = () => { header.classList.toggle('scrolled', window.scrollY > 35); topButton.classList.toggle('visible', window.scrollY > 500); };
  refreshHeader(); window.addEventListener('scroll', refreshHeader, { passive: true });
  menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu'); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.querySelectorAll('.menu-tabs button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.menu-tabs button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); }); document.querySelectorAll('.menu-panel').forEach(panel => panel.classList.remove('active')); button.classList.add('active'); button.setAttribute('aria-selected', 'true'); document.getElementById(button.dataset.menu).classList.add('active'); }));
  const reviews = [...document.querySelectorAll('.review')]; const dots = [...document.querySelectorAll('.slider-dots button')]; let current = 0;
  const displayReview = index => { current = (index + reviews.length) % reviews.length; reviews.forEach((review, i) => review.classList.toggle('active', i === current)); dots.forEach((dot, i) => dot.classList.toggle('active', i === current)); };
  document.querySelector('.previous').addEventListener('click', () => displayReview(current - 1)); document.querySelector('.next').addEventListener('click', () => displayReview(current + 1)); dots.forEach((dot, i) => dot.addEventListener('click', () => displayReview(i)));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  document.getElementById('year').textContent = new Date().getFullYear();
});
