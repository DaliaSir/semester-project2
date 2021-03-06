import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";
import { renderProducts } from "./utils/renderProducts.js";
import { filterProducts } from "./utils/filterProducts.js";
import { createLoginLink } from "./utils/dynamicMenu.js";

const productsUrl = baseUrl + "wc/store/products/?per_page=100";

createLoginLink();

(async function () {

  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderProducts(products);
    filterProducts(products);

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-container");
  }
})();