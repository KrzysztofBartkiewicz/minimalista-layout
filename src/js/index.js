import '../scss/main.scss';

/* place your code below */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const handleClick = () => {
   hamburger.classList.toggle('hamburger--active');
   nav.classList.toggle('visible');
}

hamburger.addEventListener('click', handleClick);