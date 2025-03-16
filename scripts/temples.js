document.getElementById('current-year').textContent = new Date().getFullYear();

document.getElementById('last-modified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); 
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Close the menu
navMenu.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    navMenu.classList.remove('active'); 
    hamburger.setAttribute('aria-expanded', false);
  }
});