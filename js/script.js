const navbar = document.querySelector('nav');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const icon = document.querySelector('.burger-icon');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        if (nav.classList.contains('nav-active')) {
            icon.setAttribute('href', 'images/icons.svg#cross');
        } else {
            icon.setAttribute('href', 'images/icons.svg#burger');
        }

        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

const app = () => {
    navSlide();
};

app();


var swiper = new Swiper(".mySwiper", {
    effect: "creative",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    initialSlide: 2,
    enabled: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    creativeEffect: {
        prev: {
          translate: ['-50px', '-30px', -1],
          opacity: 0.5,
        },
        next: {
          translate: ['-100px', '-60px', -2],
          opacity: 0.2,
        },
    },
});

var swiper = new Swiper(".quoteSwiper", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    enabled: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true
      },
});