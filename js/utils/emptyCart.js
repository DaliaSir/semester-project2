import getCartBadge from "./cartBadge.js";

export function clearList(renderCart) {
  if (confirm(`Are you sure you want to remove all the products in the cart?`)) {
    localStorage.removeItem("cart-list");
    renderCart();
    getCartBadge();
  }
}