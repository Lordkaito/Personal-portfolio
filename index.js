var hamburguer = document.querySelector('.ham-menu');
var mobile = document.querySelector('.mobile-hidden');
var close = document.querySelector('.close');
var body = document.querySelector('body');
var portfolio = document.querySelector('.portfolio');
var about = document.querySelector('.mobile-about');
var contact = document.querySelector('.mobile-contact');

hamburguer.addEventListener('click', open);
function open() {
  mobile.style.left = '0';
  body.style.overflow = 'hidden';
}

close.addEventListener('click', closeMenu);
function closeMenu() {
  mobile.style.left = '100%';
  body.style.overflow = 'auto';
}

portfolio.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);


