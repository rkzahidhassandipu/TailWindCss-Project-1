const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_manu");
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
});

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


// Scroll reveal Animations

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});

//here
sr.reveal('.hero__text', {origin: 'top'});

//Steps
sr.reveal('.steps__step', {distance: '100px', interval: 100});

//about
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay: 800});


// testimonial
sr.reveal('.testimonial__bg', {delay: 800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay: 1000});

// brand
sr.reveal('.brands__img', {delay: 600, distance: '100px', interval: 100});

// Work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 800});
sr.reveal('.work__grid', {delay: 1000});


// stats
sr.reveal('.stars');
sr.reveal('.stars__item', {
    distance: '100px',
    interval: 100
});

// news
sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay: 800});
sr.reveal('.news__item', {
    distance: '100px',
    interval: 100
});

// contact
sr.reveal('.contact__container');
sr.reveal('.contact__text', {delay: 800});
sr.reveal('.work__grid', {delay: 1000});

// contact
sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100
});

// contact
sr.reveal('.footer__copyright');

