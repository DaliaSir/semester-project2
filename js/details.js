import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";
import { addToCart } from "./addToCart.js";
import { createLoginLink } from "./utils/dynamicMenu.js";

createLoginLink();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "wc/store/products/" + id;

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = "Camellia" + details.name;
    const breadcrumbName = document.querySelector(".breadcrumb-item.active");
    breadcrumbName.innerHTML = `${details.name}`;

    const detailsContainer = document.querySelector(".details-container");

    detailsContainer.innerHTML = `
      <div class="col-12 col-md-8">
        <div class="details-image card-img-top" style="background-image: url('${details.images[0].src}');"></div>
      </div>
      <div class="col-12 col-md-4 details-text">
        <div>
          <h1 class="details-name">${details.name}</h1>
          <p class="details-description">${details.description}</p>
          <p class="details-price">${details.prices.currency_symbol} ${details.prices.price}</p>
        </div>  
        <a class="btn add-cart-btn" id="addToCartBtn" data-id="${details.id}" data-name="${details.name}" data-price="${details.prices.price}" data-image="${details.images[0].src}">Add To Cart</a>
      </div>`;
    addToCart();

  } catch (error) {
    displayMessage("error", error, ".details-container");
  }
})();


