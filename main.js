console.log("The script is executing");

import { addForm } from "./db";

const SERVICE = {
  BASIC: "Basic",
  ADVANCED: "Advanced",
  ULTRA: "Ultra",
};

// document.querySelector("#submitBtn").addEventListener("click", submitForm);

// function getFormData() {
//   const formData = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     message: document.querySelector("#message").value,
//   };

//   return formData;
// }

// async function submitForm(event) {
//   event.preventDefault();

//   const service = SERVICE.ULTRA;
//   const formData = getFormData();
//   await addForm(formData, service);
// }

Array.from(document.getElementsByClassName("serviceBtns")).forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      openForm(btn.getAttribute("service-name"));
    }, 250);
  });
});

function openForm() {}
