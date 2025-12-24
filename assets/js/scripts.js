/* Menu Mobile */
const nav = document.getElementById('navigation');
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir Menu
menuToggle.addEventListener('click', () => {
    nav.classList.add('show');
});

// Fechar Menu
closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
});

// Fechar menu ao clicar em um link (UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});


const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});