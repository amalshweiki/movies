const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("amal");
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const isUsernameValid = validateUsername(username);
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = validateConfirmPassword(
    password,
    confirmPassword
  );
  let isValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
  if (isValid) {
    alert(
      "Username: " + username + "\nEmail: " + email + "\nPassword: " + password
    );
  }
});
function displayerror(inputId, message) {
  const input = document.getElementById(inputId);
  const errorDiv = document.getElementById(inputId + "Error");
  input.classList.add("error");
  errorDiv.textContent = message;
}
function validateUsername(username) {
  if (username.length < 3) {
    displayerror("username", "Username must be at least 3 characters ");
    isValid = false;
  } else {
    // clearError(username);
    isValid = true;
  }
  return isValid;
}
function validatePassword(password) {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!re.test(password)) {
    displayerror(
      "password",
      "Password must be at least 8 characters long, containinglowercase, uppercase letters, numbers, and a specialcharacter. "
    );
    isValid = false;
  } else {
    // clearError(password);
    isValid = true;
  }
  return isValid;
}
function validateConfirmPassword(password, confirmPassword) {
  if (password != confirmPassword) {
    displayerror("confirmPassword", "passwords do not match");
    isValid = false;
  } else {
    //clearError(password);
    isValid = true;
  }
  return isValid;
}
function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  if (!emailRegex.test(email)) {
    displayerror("email", "Please enter a valid email.");
    isValid = false;
  } else {
    // clearError(email);
    isValid = true;
  }
  return isValid;
}

/*function clearError(inputId) {
  const input = document.getElementById(inputId);
  const errorDiv = document.getElementById(inputId + "Error");
  input.classList.remove("error-message");
  errorDiv.textContent = "";
}*/

const inputFields = [
  document.getElementById("username"),
  document.getElementById("email"),
  document.getElementById("password"),
  document.getElementById("confirmPassword"),
];

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", () => {
    inputField.classList.remove("error");

    const errorMessageElement = document.getElementById(
      inputField.id + "Error"
    );
    if (errorMessageElement) {
      errorMessageElement.textContent = "";
    }
  });
});
