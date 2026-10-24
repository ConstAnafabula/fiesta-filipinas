// Highlight the navigation link for the section currently in view
const links = document.querySelectorAll('nav a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function setActive() {
  const y = window.scrollY + 120;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}

window.addEventListener('scroll', setActive, { passive: true });
setActive();
