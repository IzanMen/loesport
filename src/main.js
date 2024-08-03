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

// ____________________________________________________________________________