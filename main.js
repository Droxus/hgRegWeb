console.log("The script is executing");

document.querySelector("#submitBtn").addEventListener("click", submitForm);

function getFormData() {
  const formData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  return formData;
}

function submitForm(event) {
  event.preventDefault();

  const formData = getFormData();
  console.log(formData);
}
