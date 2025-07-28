// Add simple fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
