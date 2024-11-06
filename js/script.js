const navbar = document.querySelector('.nav-scroll');

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

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (navbar) { 
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
};

const app = () => {
    navSlide();
};

app();