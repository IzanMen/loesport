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
        const navItems = document.querySelectorAll(`#${page}-button-escolares, #${page}-button-iniciacion, #${page}-button-benjamin, #${page}-button-alevin, #${page}-button-infantil-cadete, #${page}-button-benjamin-alevin, #${page}-button-infantil-cadete, #${page}-button-adultos-1, #${page}-button-adultos-2, #${page}-button-womens, #${page}-button-velocistas, #${page}-button-fondistas`);
        const contentDivs = document.querySelectorAll(`#${page}-escolares, #${page}-iniciacion, #${page}-benjamin, #${page}-alevin, #${page}-infantil-cadete, #${page}-adultos-1, #${page}-benjamin-alevin, #${page}-adultos-2, #${page}-womens, #${page}-velocistas, #${page}-fondistas`);

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

    // Funcionalidad de galería de imágenes
    const images = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            currentIndex = index;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    next.addEventListener('click', showNextImage);
    prev.addEventListener('click', showPrevImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Funcionalidad de deslizamiento para dispositivos móviles
    let touchStartX = 0;
    let touchEndX = 0;

    function checkDirection() {
        if (touchEndX < touchStartX) showNextImage();
        if (touchEndX > touchStartX) showPrevImage();
    }

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        checkDirection();
    });

    // Prevenir el zoom en dispositivos móviles al tocar dos veces
    lightboxImg.addEventListener('click', (e) => {
        e.preventDefault();
    });

    // Funcionalidad de galería de imágenes para la página de equipamiento
    const equipmentImages = document.querySelectorAll('.equipamiento-content__productos a img');
    const equipmentLightbox = document.getElementById('lightbox');
    const equipmentLightboxImg = document.getElementById('lightbox-img');
    const equipmentClose = document.querySelector('.close');
    const equipmentNext = document.querySelector('.next');
    const equipmentPrev = document.querySelector('.prev');
    let equipmentCurrentIndex = 0;

    if (equipmentImages.length > 0) {
        equipmentImages.forEach((img, index) => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                equipmentLightbox.style.display = 'block';
                equipmentLightboxImg.src = img.src;
                equipmentCurrentIndex = index;
            });
        });

        equipmentClose.addEventListener('click', () => {
            equipmentLightbox.style.display = 'none';
        });

        function showNextImage() {
            equipmentCurrentIndex = (equipmentCurrentIndex + 1) % equipmentImages.length;
            equipmentLightboxImg.src = equipmentImages[equipmentCurrentIndex].src;
        }

        function showPrevImage() {
            equipmentCurrentIndex = (equipmentCurrentIndex - 1 + equipmentImages.length) % equipmentImages.length;
            equipmentLightboxImg.src = equipmentImages[equipmentCurrentIndex].src;
        }

        equipmentNext.addEventListener('click', showNextImage);
        equipmentPrev.addEventListener('click', showPrevImage);

        equipmentLightbox.addEventListener('click', (e) => {
            if (e.target === equipmentLightbox) {
                equipmentLightbox.style.display = 'none';
            }
        });

        // Funcionalidad de deslizamiento para dispositivos móviles
        let equipmentTouchStartX = 0;
        let equipmentTouchEndX = 0;

        function checkDirection() {
            if (equipmentTouchEndX < equipmentTouchStartX) showNextImage();
            if (equipmentTouchEndX > equipmentTouchStartX) showPrevImage();
        }

        equipmentLightbox.addEventListener('touchstart', (e) => {
            equipmentTouchStartX = e.changedTouches[0].screenX;
        });

        equipmentLightbox.addEventListener('touchend', (e) => {
            equipmentTouchEndX = e.changedTouches[0].screenX;
            checkDirection();
        });

        // Prevenir el zoom en dispositivos móviles al tocar dos veces
        equipmentLightboxImg.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }
});

// Modal cookies

const modalCookies = document.querySelector('.modal-cookies');
const buttonmodalCookies = document.querySelector('.modal-cookies__button');

if (localStorage.getItem('cookiesAccepted') === 'true') {
    modalCookies.style.display = 'none';
} else {
    buttonmodalCookies.addEventListener('click', (e) => {
        localStorage.setItem('cookiesAccepted', 'true');
        modalCookies.style.display = 'none';
    });
}

