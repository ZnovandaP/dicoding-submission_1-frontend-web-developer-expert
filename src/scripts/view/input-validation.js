const commonInput = document.querySelectorAll(".input");

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputCompany = document.querySelector("#company");
const inputMessage = document.querySelector("#message");

const notificationInputName = document.querySelector(".notification-name");
const notificationInputEmail = document.querySelector(".notification-email");
const notificationInputCompany = document.querySelector(
  ".notification-company"
);
const notificationInputMessage = document.querySelector(
  ".notification-message"
);
const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const buttonSubmit = document.querySelector(".button-submit");

commonInput.forEach((input) => {
  input.addEventListener("input", function () {
    inputValidation();
  });
});

const inputIsValid = () => {
  return (
    inputName.value.length > 2 &&
    inputCompany.value.length > 2 &&
    inputMessage.value.length > 4 &&
    inputEmail.value.match(validRegexEmail)
  );
};

const inputValidation = () => {
  if (inputName.value.length < 3) {
    notificationInputName.classList.replace(
      "hide-notification",
      "show-notification"
    );
  } else {
    notificationInputName.classList.replace(
      "show-notification",
      "hide-notification"
    );
  }

  if (inputCompany.value.length < 3) {
    notificationInputCompany.classList.replace(
      "hide-notification",
      "show-notification"
    );
  } else {
    notificationInputCompany.classList.replace(
      "show-notification",
      "hide-notification"
    );
  }

  if (inputEmail.value.match(validRegexEmail)) {
    notificationInputEmail.classList.replace(
      "show-notification",
      "hide-notification"
    );
  } else {
    notificationInputEmail.classList.replace(
      "hide-notification",
      "show-notification"
    );
  }

  if (inputMessage.value.length < 5) {
    notificationInputMessage.classList.replace(
      "hide-notification",
      "show-notification"
    );
  } else {
    notificationInputMessage.classList.replace(
      "show-notification",
      "hide-notification"
    );
  }

  /* button submit after validation */
  if (inputIsValid()) {
    buttonSubmit.classList.replace("not-allowed", "allowed");
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.classList.replace("allowed", "not-allowed");
    buttonSubmit.disabled = true;
  }
};
