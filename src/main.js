document.addEventListener("DOMContentLoaded", function() {
    // Animación del NAV (Se añade la clase "active" a cada elemento del NAV cuando la url coincide con el enlace del elemento)
    const navLinks = document.querySelectorAll('.header__nav__list-item a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === window.location.pathname) {
            link.classList.add("active"); 
        }
    });

    // Menú desplegable en versión móvil
    const navigation = document.querySelector(".header__nav__list");
    const navMenu = document.querySelector(".header__nav-menu");

    if (navMenu) {
        navMenu.addEventListener("click", (e) => {
            navigation.classList.toggle("navigation-active");
        });
    }

    // Desplegables componente "GRUPOS"
    const gruposItems = document.querySelectorAll('.global-grupos__nav-item');

    gruposItems.forEach(item => {
        item.addEventListener('click', () => {
            gruposItems.forEach(otherItem => otherItem.classList.remove('global-grupos__nav-item--active'));
            item.classList.add('global-grupos__nav-item--active');
        });
    });

    // Desplegables componente "SUBGRUPOS"
    const subgruposButtons = document.querySelectorAll('[id^="alaior-button-"]');
    const subgruposContents = document.querySelectorAll('[id^="alaior-"]');

    subgruposButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.id.replace('button-', '');
            
            subgruposButtons.forEach(btn => btn.classList.remove('sub-grupos-main__nav-item--active'));
            subgruposContents.forEach(content => content.classList.remove('sub-grupos-main__content--active'));
            
            button.classList.add('sub-grupos-main__nav-item--active');
            document.getElementById(targetId).classList.add('sub-grupos-main__content--active');
        });
    });
});