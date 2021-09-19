import { getUsername } from "./saveUser.js";
import { logout } from "./logoutButton.js";
import getCartBadge from "./cartBadge.js";

export function createLoginLink() {
  const loginLinkContainer = document.querySelector(".loginLink");
  getCartBadge();

  const { pathname } = document.location;

  const username = getUsername();

  let loginLink = `<a class="nav-link  ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;

  if (typeof (username) === "string") {
    loginLink = `     <span class="nav-link ">Hello! ${username}</span>
                      
                      <a class="nav-link  ${pathname === "/add.html" ? "active" : ""}" href="add.html">Add Product</a>
                      <button id="logout" type="button" class="nav-link rounded-pill no-border">Logout</button>
                      `;
  }

  loginLinkContainer.innerHTML = `${loginLink}`;

  logout();
}