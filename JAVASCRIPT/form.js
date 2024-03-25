"use strict"

let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

let setError = (element, message) => {
  let inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
let setSuccess = (element) => {
  let inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

let isValidEmail = (email) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let validateInputs = () => {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};