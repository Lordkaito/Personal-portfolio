const hamburguer = document.querySelector('.ham-menu');
const mobile = document.querySelector('.mobile-hidden');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const portfolio = document.querySelector('.portfolio');
const about = document.querySelector('.mobile-about');
const contact = document.querySelector('.mobile-contact');

function open() {
  mobile.style.left = '0';
  body.style.overflow = 'hidden';
}

function closeMenu() {
  mobile.style.left = '100%';
  body.style.overflow = 'auto';
}

hamburguer.addEventListener('click', open);
close.addEventListener('click', closeMenu);
portfolio.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);