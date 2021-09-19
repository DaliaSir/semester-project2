import { getFromStorage } from "./localStorage.js";
export default function getCartBadge() {
  const cartBadgeContainer = document.querySelector(".cart-nav-link span");
  const inCart = getFromStorage("cart-list");
  let cartBadge = 0;
  cartBadge = inCart.length;
  cartBadgeContainer.innerHTML = cartBadge;
};