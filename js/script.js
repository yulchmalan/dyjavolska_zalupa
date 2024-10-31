const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const icon = document.querySelector('.burger-icon');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        if(nav.classList.contains('nav-active')) {
            icon.setAttribute('href', 'images/icons.svg#cross');
        } else {
            icon.setAttribute('href', 'images/icons.svg#burger');
        }

        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`
            }
        })
    })
}

const app = () => {
    navSlide();
}

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
          // will set `translateZ(-400px)` on previous slides
          translate: ['-40px', '-40px', -1],
          opacity: 0.7,
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['-80px', '-80px', -2],
          opacity: 0.5,
        },
      },
  });
