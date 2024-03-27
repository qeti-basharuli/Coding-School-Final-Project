"use strict";

// import {validationForm} from "./form.js";
// validationForm();


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

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// fetch

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
})
  .then(function (response) {
    console.log(response);
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (data) {
    let ul = document.createElement("ul");

    data.data.forEach((element) => {
      console.log(element);
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name}`;
      ul.appendChild(li);
    });
    document.getElementById("api").appendChild(ul);
  })
  .catch(function (error) {
    console.log(error);
    if (error === 404) {
      let p = document.createElement("p");
      p.textContent = "page not found";
      document.getElementById("api").appendChild(p);
    }
  });
