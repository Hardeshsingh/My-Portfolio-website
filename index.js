
window.onscroll = () => {

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 110);

};
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

function updateActiveNavLink() {
  const currentSection = Array.from(sections).findIndex((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > 0;
  });

  navLinks.forEach((link) => link.classList.remove('active'));
  if (currentSection !== -1) {
    navLinks[currentSection].classList.add('active');
  }
}

function toggleStickyHeader() {
  header.classList.toggle('sticky', window.scrollY > 110);
}

window.addEventListener('scroll', () => {
  updateActiveNavLink();
  toggleStickyHeader();
});

updateActiveNavLink();
toggleStickyHeader();


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 180
    
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .projects-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
