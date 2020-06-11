import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../scss/main.scss';

/* place your code below */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const handleClick = () => {
   hamburger.classList.toggle('hamburger--active');
   nav.classList.toggle('visible');
}

hamburger.addEventListener('click', handleClick);