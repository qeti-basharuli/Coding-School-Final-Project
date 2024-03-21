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


// // registration
// export function validationForm() {
//   let form = document.getElementById("formelement");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let error = {};

//     //username

//     let usernameValue = document.getElementById("name").value;

//     if (usernameValue == "") {
//       errors.name = "Name field cannot be empty";
//     }
//     console.log(error);

//     this.querySelectorAll(".error-text").forEach((el) => {
//       el.textContent = "";
//     });

//     for (let item in error) {
//       console.log(item);

//       let errorTextElement = document.getElementById("error_" + item);

//       console.log(errorTextElement);

//       if (errorTextElement) {
//         errorTextElement.textContent = error[item];
//       }
//     }

//     //message

//     let messageValue = document.getElementById("message").value;

//     if (messageValue == "") {
//       error.message = "Feedback field cannot be empty";
//     }
//     console.log(error);

//     this.querySelectorAll(".error-text").forEach((el) => {
//       el.textContent = "";
//     });

//     for (let item in error) {
//       console.log(item);

//       let errorTextElement = document.getElementById("error_" + item);

//       console.log(errorTextElement);

//       if (errorTextElement) {
//         errorTextElement.textContent = error[item];
//       }
//     }

//     if (Object.keys(error).length === 0) {
//       this.submit();
//     }
//   });

//   //email regex

//   let email = document.getElementById("emailfield");

//   function validation() {
//     let emailValue = document.getElementById("emailfield").value;
//     let textError = document.getElementById("error-email");
//     let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if (emailValue.match(emailPattern)) {
//       textError.textContent = "Your Email is Valid";
//       textError.style.color = "green";
//     } else {
//       textError.textContent = "Your Email is Invalid";
//       textError.style.color = "red";
//     }

//     if (emailValue == "") {
//       textError.innerHTML = "";
//     }
//   }

//   email.addEventListener("keyup", validation);
// }
