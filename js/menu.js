/** @format */

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav__menu');

const btnHandler = () => {
  navBtn.classList.toggle('on');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
};

navBtn.addEventListener('click', btnHandler);
