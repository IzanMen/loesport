// Animación del NAV (Se de la classe "active" a cada elemento del NAV cuando la url coincide con el enlace del elemento)

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.header__nav__list-item a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === window.location.pathname) {
            link.classList.add("active"); 
        }
    });
});

// Menú desplegable en versión móvil

const navigation = document.querySelector(".header__nav__list");

document.querySelector(".header__nav-menu").addEventListener("click", (e) => {
    navigation.classList.toggle("navigation-active");
});

// Desplegables componente "GRUPOS"

const mahon = document.querySelector(".index-grupos__nav-item--mahon");
const mercadal = document.querySelector(".index-grupos__nav-item--mercadal");
const alaior = document.querySelector(".index-grupos__nav-item--alaior");

mahon.addEventListener("click", (e) => {
    mahon.classList.add("index-grupos__nav-item--active");
    mercadal.classList.remove("index-grupos__nav-item--active");
    alaior.classList.remove("index-grupos__nav-item--active");
});

mercadal.addEventListener("click", (e) => {
    mercadal.classList.add("index-grupos__nav-item--active");
    mahon.classList.remove("index-grupos__nav-item--active");
    alaior.classList.remove("index-grupos__nav-item--active");
});

alaior.addEventListener("click", (e) => {
    alaior.classList.add("index-grupos__nav-item--active");
    mahon.classList.remove("index-grupos__nav-item--active");
    mercadal.classList.remove("index-grupos__nav-item--active");
});


