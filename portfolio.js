// =======================
// MENU TOGGLE FUNCTIONALITY
// =======================
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// =======================
// SCROLL REVEAL ANIMATIONS
// =======================
// Using ScrollReveal.js to animate sections on scroll
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 10,
    reset: true
});

// Reveal sections
sr.reveal('.hero .container', { delay: 10 });
sr.reveal('.about .about-content', { delay: 10 });
sr.reveal('.skills .skills-container', { delay: 10 });
sr.reveal('.portfolio .portfolio-container', { delay: 10 });
sr.reveal('.cta .cta-content', { delay: 10 });
sr.reveal('.contact .contact-content', { delay: 10 });
sr.reveal('.resume .resume-content', { delay: 10 });
sr.reveal('.education .education-content', { delay: 10 });
sr.reveal('.footer', { delay: 10 });

// =======================
// SWIPER.JS INITIALIZATION
// =======================
// Optional: For testimonial or project sliders
const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar (optional)
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
