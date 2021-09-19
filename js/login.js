import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";
import { noUsername, noPassword } from "./components/messages.js";
import { saveToken, saveUser } from "./utils/saveUser.js";
import { createLoginLink } from "./utils/dynamicMenu.js";

const loginForm = document.querySelector(".login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const formMessage = document.querySelector(".form-message");

createLoginLink();

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  formMessage.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0) {
    return displayMessage("warning", noUsername, ".form-message");
  } else if (passwordValue.length === 0) {
    return displayMessage("warning", noPassword, ".form-message");
  }

  successfulLogin(usernameValue, passwordValue);
});

async function successfulLogin(username, password) {

  const loginUrl = baseUrl + "jwt-auth/v1/token";

  console.log(loginUrl);

  const userData = JSON.stringify({ username: username, password: password });

  const options = {
    method: "POST",
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(loginUrl, options);
    const json = await response.json();
    console.log(json);

    if (json.user_display_name) {
      saveToken(json.token);
      saveUser(json.user_display_name);
      location.href = "/";
    }

    if (json.message) {
      return displayMessage("error", json.message, ".form-message");
    }
    console.log(json);

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".form-message");
  }
}