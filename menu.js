const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function bkgImg1() {
  const menuH = document.querySelectorAll('.menu-img');
  menuH.forEach((el) => { el.classList.toggle('active'); });
}

function mobileMenu() {
  bkgImg1();
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', mobileMenu);

function closeMenu() {
  bkgImg1();
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));