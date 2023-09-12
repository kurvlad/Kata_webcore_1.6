import Swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 560) {
    swiperInit();
  }
});

function swiperInit() {
  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 10000,
    updateOnWindowResize: true,
    spaceBetween: 10,
    grabCursor: true,
    parallax: true,
    swiperInit: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true,
        // slideToClickedSlide: true,
      },
      320: {
        slidesPerView: 1.1,
        enabled: true,
        slideToClickedSlide: true,
      },
      350: {
        slidesPerView: 1.3,
        enabled: true,
      },
      390: {
        slidesPerView: 1.5,
        enabled: true,
      },
      540: {
        slidesPerView: 2,
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
}
