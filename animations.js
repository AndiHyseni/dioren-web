document.addEventListener("DOMContentLoaded", function () {
  // Remove intro overlay after a short delay
  const introOverlay = document.querySelector(".intro-overlay");
  if (introOverlay) {
    setTimeout(function () {
      introOverlay.style.display = "none";
      document.body.classList.add("loaded");
    }, 500);
  }

  // Initialize Swiper for testimonials
  const swiper = new Swiper(".testimonials-swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
});
