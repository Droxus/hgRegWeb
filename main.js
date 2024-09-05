console.log("The script is executing");

import { addForm } from "./db";
import { forms } from "./forms";
import {
  validateOnlyDigits,
  validateOnlyText,
  validateOnlyAllText,
  validateEmail,
  validatePhone,
  validatePassport,
} from "./validation";

const SERVICE = {
  BASIC: "Basic",
  ADVANCED: "Advanced",
  ULTRA: "Ultra",
  OTHERS: "Others",
};

const currentService = SERVICE.OTHERS;

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

function addClassEventListener(className, type, method) {
  Array.from(document.getElementsByClassName(className)).forEach((inp) => {
    inp.addEventListener(type, method);
  });
}

function autoResizeTextarea(event) {
  this.style.height = "auto"; // Reset the height so it doesn't keep growing
  this.style.height = this.scrollHeight + "px";

  const textarea = event.target;
  const currentLength = textarea.value.length;
  const maxChars = textarea.getAttribute("maxlength");
  const charCount =
    textarea.parentElement.getElementsByClassName("inputHelper")[0];

  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars); // Trim the value to the max length
  }

  charCount.textContent = `${textarea.value.length}/${maxChars} characters used`;
}

function addFormPageEventListeners() {
  addClassEventListener("passport", "input", validatePassport);
  addClassEventListener("onlyDigits", "input", validateOnlyDigits);
  addClassEventListener("onlyText", "input", validateOnlyText);
  addClassEventListener("onlyAllText", "input", validateOnlyAllText);
  addClassEventListener("phone", "input", validatePhone);
  addClassEventListener("email", "input", validateEmail);
  addClassEventListener("textarea", "input", autoResizeTextarea);
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
  if (type == "textarea") {
    return `
    <div class="inputWrapper">
      <label for="customInput" class="inputLabel">${labelName}:</label>
      ${required ? ` <label class="reuiresStart">*</label>` : ""}
      <textarea type="${type}" id="${id}" class="inputField ${className}" fieldName="${fieldName}"
      minlength="${minlength}" maxlength="${maxlength}" placeholder="${placeholder}" 
      ${required ? "required" : ""}></textarea>
      <small class="inputHelper">${inputHelper}</small>
      <span class="error inputError">Invalid input. Please check and try again.</span>
    </div>
  `;
  } else {
    return `
      <div class="inputWrapper">
        <label for="customInput" class="inputLabel">${labelName}:</label>
        ${required ? ` <label class="reuiresStart">*</label>` : ""}
        <input type="${type}" id="${id}" class="inputField ${className}" fieldName="${fieldName}"
        minlength="${minlength}" maxlength="${maxlength}" placeholder="${placeholder}" 
        ${required ? "required" : ""}>
        <small class="inputHelper">${inputHelper}</small>
        <span class="error inputError">Invalid input. Please check and try again.</span>
      </div>
    `;
  }
}

function showForm() {
  const thisForm = forms[currentService] ?? {};
  const formContainer = document.getElementById("formContainer");
  Object.entries(thisForm).forEach(([key, value]) => {
    const input = createInput(value);
    formContainer.insertAdjacentHTML("beforeend", input);
  });
}

function openFormPage() {
  showForm();
  addFormPageEventListeners();
}

function main() {
  // openHomePage();
  openFormPage();
  console.log(forms);
}
main();
