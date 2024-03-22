"use strict";

// burger bar
let hamMenu = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector(".nav-ul");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".a-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//slider

let progressCircle = document.querySelector(".autoplay-progress svg");
let progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
