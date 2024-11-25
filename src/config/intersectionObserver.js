document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  console.log(sections);
  const navLinks = document.querySelectorAll('nav ul li a');
  console.log(navLinks);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('nav-active');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('nav-active');
          }
        });
      }
    });
  }, {
    threshold: 0.4,
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});