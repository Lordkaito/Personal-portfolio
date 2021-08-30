var hamburguer = document.querySelector('.ham-menu');
var mobile = document.querySelector('.mobile-hidden');
var close = document.querySelector('.close');
var body = document.querySelector('body');
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