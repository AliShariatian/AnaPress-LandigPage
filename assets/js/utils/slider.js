document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".comments .swiper-container", {
    slidesPerView: 3, // Show 3 slides at once
    spaceBetween: 30, // Space between slides
    loop: true, // Loop through slides

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 3000, // Auto-slide every 3 seconds
    //   disableOnInteraction: false,
    // },

    breakpoints: {
      1024: {
        slidesPerView: 3, // 3 slides on screens larger than 1024px
      },
      768: {
        slidesPerView: 2, // 2 slides on screens between 768px and 1024px
      },
      480: {
        slidesPerView: 1, // 1 slide on screens smaller than 768px
      },
    },

    on: {
      init: function () {
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
          slide.style.cursor = "grab";
        });
      },
      touchStart: function () {
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
          slide.style.cursor = "grabbing";
        });
      },
      touchEnd: function () {
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
          slide.style.cursor = "grab";
        });
      },
    },
  });
});
