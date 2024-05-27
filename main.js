const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
})