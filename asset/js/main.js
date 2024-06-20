let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1140: {
            slidesPerView: 3,
        }
    },
  });