// ============================================================
// PORTFOLIO — main.js
// ============================================================

// Intersection Observer → fade-in de secciones
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.project-card, .section-title, .about-grid').forEach((el) => {
  el.classList.add('fade-target');
  observer.observe(el);
});

// Estilos de fade en JS (para no requerir otro archivo)
const style = document.createElement('style');
style.textContent = `
  .fade-target { opacity: 0; transform: translateY(18px); transition: opacity .5s ease, transform .5s ease; }
  .fade-target.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);

// Nav active link en scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--accent)'
      : 'var(--ink-muted)';
  });
}, { passive: true });
