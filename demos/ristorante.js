// Smooth scroll
document.querySelectorAll('[data-scroll], a[href^="#"]').forEach(el => {
  el.addEventListener('click', e => {
    const target = el.dataset.scroll || el.getAttribute('href');
    if (!target.startsWith('#')) return;
    const section = document.querySelector(target);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));
