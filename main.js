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
  validateDate,
} from "./validation";
import { HtmlBlocks, SERVICE } from "./htmlBlocks";

let currentService = SERVICE.BASIC;
const ERROR_COLOR = "#dc3545";
const body = document.getElementsByTagName("body")[0];
const LINK = "https://t.me/+tbPfmAesDdBmYjEy";

function removeAllChildren(selector) {
  const div = document.querySelector(selector);

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
  addElEventListener("#openChatWithUsBtn", "click", () =>
    window.open(LINK, "_blank")
  );
}

function addHtmlBlock(parentEl, htmlBlock, position = "beforeend") {
  document.querySelector(parentEl).insertAdjacentHTML(position, htmlBlock);
}

function showHomePage() {
  removeAllChildren("#app");
  body.style.backgroundColor = "#7370a0";

  addHtmlBlock("#app", HtmlBlocks.getHomePage());
  addHtmlBlock("#homePage", HtmlBlocks.getHomePageHeader());
  addHtmlBlock("#homePage", HtmlBlocks.getHomePageMain());
  addHtmlBlock("#homePage", HtmlBlocks.getHomePageFooter());
}

function openHomePage() {
  showHomePage();
  addHomePageEventListeners();
  window.scrollTo(0, 0);
}

function addElEventListener(selector, type, method) {
  document.querySelector(selector).addEventListener(type, method);
}

function addClassEventListener(className, type, method) {
  Array.from(document.getElementsByClassName(className)).forEach((el) => {
    el.addEventListener(type, method);
  });
}

function autoResizeTextarea(event) {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";

  const textarea = event.target;
  const currentLength = textarea.value.length;
  const maxChars = textarea.getAttribute("maxlength");
  const charCount =
    textarea.parentElement.getElementsByClassName("inputHelper")[0];

  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
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
  removeAllChildren("#app");
  const msg =
    currentService == SERVICE.BASIC || currentService == SERVICE.ADVANCED
      ? HtmlBlocks.getDefaultSuccessMessage()
      : HtmlBlocks.getAdvancedSuccessMessage();
  addHtmlBlock("#app", HtmlBlocks.getSuccessMsgPage(msg));
  addElEventListener("#updPagebtn", "click", () => location.reload());
}

async function onSubmitBtn() {
  console.log("submit btn clicked");

  const data = getFormData();
  if (data == undefined) {
    return showSubmitError();
  }

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
  addClassEventListener("date", "keydown", validateDate);
  addClassEventListener("date", "input", validateDate);
  addClassEventListener("textarea", "input", autoResizeTextarea);
  addElEventListener("#submitBtn", "click", onSubmitBtn);
}

function showForm() {
  removeAllChildren("#app");
  body.style.backgroundColor = "aquamarine";

  addHtmlBlock("#app", HtmlBlocks.getFormContainer());
  addHtmlBlock("#formContainer", HtmlBlocks.getFormHeader(currentService));

  const thisForm = forms[currentService] ?? {};

  Object.entries(thisForm).forEach(([key, value]) =>
    addHtmlBlock("#formContainer", HtmlBlocks.getFormInput(value))
  );

  addHtmlBlock("#formContainer", HtmlBlocks.getSubmit());
  addElEventListener("#formHeaderGoBackBtn", "click", openHomePage);
  window.scrollTo(0, 0);
}

function openFormPage() {
  showForm();
  addFormPageEventListeners();
}

function main() {
  openHomePage();
}
main();
