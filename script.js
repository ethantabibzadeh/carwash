const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
// Supplied business images can replace these local assets without changing the layout.
// Keep the designed fallback visible until each local image has actually loaded.
document.querySelectorAll('[data-photo]').forEach(surface => {
  const image = new Image();
  image.onload = () => { surface.style.backgroundImage = `linear-gradient(0deg, rgba(7,26,43,.25), rgba(7,26,43,.03)), url("${surface.dataset.photo}")`; surface.classList.add('has-photo'); };
  image.src = surface.dataset.photo;
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
  document.querySelectorAll('.service-card, .story-copy, .steps > div, .review-grid figure').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
}

