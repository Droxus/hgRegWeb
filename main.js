console.log("The script is executing");

import { addForm } from "./db";
import { forms } from "./forms";
import {
  validateInput,
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

let currentService = SERVICE.BASIC;
const ERROR_COLOR = "#dc3545";

function removeAllChildren(divId) {
  const div = document.getElementById(divId);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function addHomePageEventListeners() {
  Array.from(document.getElementsByClassName("serviceBtns")).forEach((btn) => {
    btn.addEventListener("click", () => {
      const serviceName = btn.getAttribute("service-name");
      currentService = SERVICE[serviceName];
      openFormPage();
    });
  });
}

function showHomePage() {}

function openHomePage() {
  showHomePage();
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

function showErrorInput(input) {
  if (input) {
    const inputError =
      input.parentElement.getElementsByClassName("inputError")[0];
    if (inputError) {
      console.log("show error");
      inputError.style.display = "block";
    }
    input.style.outline = "1px solid " + ERROR_COLOR;
    input.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      inputError.style.display = "none";
      input.style.outline = "none";
    }, 3000);
  }
}

function getFormData() {
  const thisForm = forms[currentService];

  if (thisForm == undefined) {
    return undefined;
  }

  const data = {};

  for (const [key, value] of Object.entries(thisForm)) {
    const isInputValid = validateInput(value);
    const input = document.getElementById(value.id);

    if (isInputValid) {
      data[key] = input.value ?? "";
    } else {
      showErrorInput(input);
      return undefined;
    }
  }

  return data;
}

let formSubmitErrorTimeout;
function showSubmitError() {
  clearTimeout(formSubmitErrorTimeout);
  formSubmitErrorTimeout = setTimeout(() => {
    document.getElementById("submitErrorLbl").style.color = "transparent";
  }, 5000);
  document.getElementById("submitErrorLbl").style.color = ERROR_COLOR;
}

function showSuccessMessage() {
  removeAllChildren("app");
  const msg1 = `Спасибо! <br>Мы свяжемся с вами сразу как только получим для вас точную дату подачи 
  <br>(не позднее чем следующая пятница)`;
  const msg2 = `Спасибо! <br>Наши юристы свяжутся с вами в течении 15 минут`;
  const msg =
    currentService == SERVICE.BASIC || currentService == SERVICE.ADVANCED
      ? msg1
      : msg2;
  document.getElementById("app").insertAdjacentHTML(
    "beforeend",
    `
    <div id="successMsgPage">
        <div id="successMsgContainer">
            <label id="successMsgLbl">${msg}</label>
            <button id="updPagebtn">Обновить страинцу</button>
        </div>
    </div>
  `
  );
  document.getElementById("updPagebtn").addEventListener("click", () => {
    location.reload();
  });
}

async function onSubmitBtn() {
  console.log("submit btn clicked");

  const data = getFormData();
  if (data == undefined) {
    showSubmitError();
  }
  console.log(data);
  await addForm(data, currentService);
  showSuccessMessage();
}

function addFormPageEventListeners() {
  addClassEventListener("passport", "input", validatePassport);
  addClassEventListener("onlyDigits", "input", validateOnlyDigits);
  addClassEventListener("onlyText", "input", validateOnlyText);
  addClassEventListener("onlyAllText", "input", validateOnlyAllText);
  addClassEventListener("phone", "input", validatePhone);
  addClassEventListener("email", "input", validateEmail);
  addClassEventListener("textarea", "input", autoResizeTextarea);
  document.getElementById("submitBtn").addEventListener("click", onSubmitBtn);
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
  removeAllChildren("app");
  document
    .getElementById("app")
    .insertAdjacentHTML("beforeend", `<div id="formContainer"></div>`);

  const thisForm = forms[currentService] ?? {};
  const formContainer = document.getElementById("formContainer");
  Object.entries(thisForm).forEach(([key, value]) => {
    const input = createInput(value);
    formContainer.insertAdjacentHTML("beforeend", input);
  });

  formContainer.insertAdjacentHTML(
    "beforeend",
    `
    <label id="submitErrorLbl">The form cannot be submitted with invalid data</label>
     <button id="submitBtn">Submit</button>`
  );
}

function openFormPage() {
  showForm();
  addFormPageEventListeners();
}

function main() {
  openHomePage();
}
main();
