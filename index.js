const hamburguer = document.querySelector('.ham-menu');
const mobile = document.querySelector('.mobile-hidden');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const portfolio = document.querySelector('.portfolio');
const about = document.querySelector('.mobile-about');
const contact = document.querySelector('.mobile-contact');

const openMenu = () => {
  mobile.style.display = 'flex';
  body.style.overflowY = 'hidden';
  // set timeout to open menu
  setTimeout(() => {
    mobile.style.left = '0';
  }, 100);
};

const closeMenu = () => {
  // set timeout to close menu
  setTimeout(() => {
    mobile.style.display = 'none';
  }, 200);
  body.style.overflow = 'auto';
  mobile.style.left = '100%';
};

hamburguer.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
portfolio.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);
