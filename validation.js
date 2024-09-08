// Function to prevent invalid characters and enforce maxlength
export function validateInput(input) {
  const thisInput = document.getElementById(input.id);
  const value = thisInput.value;
  const valueLength = value.length;
  const maxLength = Number(input.maxlength);
  const minLength = Number(input.minlength);
  const isRequired = input.required;
  if (!isRequired) {
    return true;
  }

  if (valueLength >= minLength && valueLength <= maxLength) {
    return true;
  } else {
    return false;
  }
}

export function validateOnlyDigits(event) {
  const input = event.target;
  const value = input.value;

  // Replace invalid characters based on regex
  const maxLength = input.getAttribute("maxlength") ?? 32;
  const regex = /[^0-9]/g;
  const validValue = value.replace(regex, "");

  // Check if the value exceeds the maxlength
  input.value = validValue.slice(0, maxLength);
}

export function validateOnlyAllText(event) {
  const input = event.target;
  const value = input.value;

  // Allow both English (A-Z, a-z) and Russian (А-Я, а-я) letters
  const maxLength = input.getAttribute("maxlength") ?? 32;
  const regex = /[^A-Za-zА-Яа-я]/g; // Updated regex to include Russian letters
  const validValue = value.replace(regex, "");

  // Check if the value exceeds the maxlength
  input.value = validValue.slice(0, maxLength);
}

export function validateOnlyText(event) {
  const input = event.target;
  const value = input.value;

  // Replace invalid characters based on regex
  const maxLength = input.getAttribute("maxlength") ?? 32;
  const regex = /[^A-Za-z]/g;
  const validValue = value.replace(regex, "");

  // Check if the value exceeds the maxlength
  input.value = validValue.slice(0, maxLength);
}

export function validatePassport(event) {
  const value = event.target.value.toUpperCase();
  const letters = value.substring(0, 2).replace(/[^A-Z0-9]/g, "");
  const numbers = value.substring(2).replace(/[^0-9]/g, "");
  event.target.value = letters + numbers.substring(0, 7);
}

// Function for phone validation
export function validatePhone(event) {
  const input = event.target;
  const value = input.value;

  // Replace invalid characters that are not digits or "+"
  const validValue = value.replace(/[^0-9+]/g, "");

  // Ensure the phone starts with "+"
  if (!validValue.startsWith("+")) {
    input.value = `+${validValue.replace("+", "")}`;
  } else {
    input.value = validValue.slice(0, input.maxLength);
  }

  // Display error if invalid
  const error = input.parentElement.getElementsByClassName("error")[0];
  if (!/^(\+[0-9]*)$/.test(validValue)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

// Function for email validation
export function validateEmail(event) {
  const input = event.target;
  const value = input.value;

  // Simple email format validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = input.parentElement.getElementsByClassName("error")[0];

  if (!regex.test(value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

export function validateDate(event) {
  const maxYear = 3000;
  const value = event.target.value;
  const splittedDate = value.split("-");
  const year = Number(splittedDate[0]);
  if (!isNaN(year) && year !== 0 && year > maxYear) {
    event.target.value = String(maxYear) + value.slice(-6);
  }
}
