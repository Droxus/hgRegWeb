console.log("The script is executing");

import { addForm } from "./db";
import { forms } from "./forms";

const SERVICE = {
  BASIC: "Basic",
  ADVANCED: "Advanced",
  ULTRA: "Ultra",
};

const currentService = SERVICE.BASIC;

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

function addHomePageEventListeners() {
  Array.from(document.getElementsByClassName("serviceBtns")).forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        openForm(btn.getAttribute("service-name"));
      }, 250);
    });
  });
}

function openHomePage() {
  addHomePageEventListeners();
}

function addFormPageEventListeners() {
  // Array.from(document.getElementsByClassName("customInput")).forEach((inp) => {
  //   inp.addEventListener("input", function (e) {
  //     const value = e.target.value.toUpperCase();
  //     const letters = value.substring(0, 2).replace(/[^A-Z]/g, "");
  //     const numbers = value.substring(2).replace(/[^0-9]/g, "");
  //     e.target.value = letters + numbers.substring(0, 7);
  //   });
  // });
}

function createInput(params) {
  const {
    id,
    fieldName,
    type,
    className,
    labelName,
    placeholder,
    maxlength,
    minlength,
    required,
    inputHelper,
  } = params;
  return `
    <div class="inputWrapper">
      <label for="customInput" class="inputLabel">${labelName}:</label>
      ${required ? ` <label class="reuiresStart">*</label>` : ""}
      <input type="${type}" id="${id}" class="inputField ${className}" maxlength="${maxlength}" placeholder="${placeholder}" required>
      <small class="inputHelper">${inputHelper}</small>
      <span class="error inputError">Invalid input. Please check and try again.</span>
    </div>
  `;
}

function showForm() {
  const thisForm = forms[currentService];
  const formContainer = document.getElementById("formContainer");
  Object.entries(thisForm).forEach(([key, value]) => {
    const input = createInput(value);
    formContainer.insertAdjacentHTML("beforeend", input);
  });
}

function openFormPage() {
  addFormPageEventListeners();
  showForm();
}

function main() {
  // openHomePage();
  openFormPage();
  console.log(forms);
}
main();
