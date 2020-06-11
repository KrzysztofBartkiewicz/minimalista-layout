import '../scss/main.scss';

/* place your code below */

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('hamburger--active');
});