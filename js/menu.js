/** @format */

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav__menu');

const btnHandler = () => {
  navBtn.classList.toggle('on');
  nav.classList.toggle('displayFlex');
};

navBtn.addEventListener('click', btnHandler);
