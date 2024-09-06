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

    // Funcionalidad para las páginas de grupos (Alaior, Mahón y Mercadal)
    const groupPages = ['alaior', 'mahon', 'mercadal'];

    groupPages.forEach(page => {
        const navItems = document.querySelectorAll(`#${page}-button-escolares, #${page}-button-adultos-fondo, #${page}-button-adultos-esport-salut, #${page}-button-womens`);
        const contentDivs = document.querySelectorAll(`#${page}-escolares, #${page}-adultos-fondo, #${page}-adultos-esport-salut, #${page}-womens`);

        navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // Remover la clase activa de todos los elementos de navegación
                navItems.forEach(navItem => navItem.classList.remove('sub-grupos-main__nav-item--active'));
                
                // Añadir la clase activa al elemento clickeado
                item.classList.add('sub-grupos-main__nav-item--active');

                // Ocultar todos los contenidos
                contentDivs.forEach(div => div.classList.remove('sub-grupos-main__content--active'));
                
                // Mostrar el contenido correspondiente
                contentDivs[index].classList.add('sub-grupos-main__content--active');
            });
        });
    });
});