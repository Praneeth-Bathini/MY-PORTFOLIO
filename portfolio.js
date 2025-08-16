// Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 10,
    reset: true
});

sr.reveal('.hero .container', { delay: 10 });
sr.reveal('.about .about-content', { delay: 10 });
sr.reveal('.skills .skills-container', { delay: 10 });
sr.reveal('.portfolio .portfolio-container', { delay: 10 });
sr.reveal('.cta .cta-content', { delay: 10 });
sr.reveal('.contact .contact-content', { delay: 10 });
sr.reveal('.resume .resume-content', { delay: 10 });
sr.reveal('.education .education-content', { delay: 10 });
sr.reveal('.footer', { delay: 10 });

// Swiper.js (for Testimonial Slider - optional)
const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
