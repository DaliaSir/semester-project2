import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";
import { renderFeatured } from "./utils/renderFeatured.js";
import { createLoginLink } from "./utils/dynamicMenu.js";

const heroUrl = baseUrl + "wp/v2/media/75";

createLoginLink();

(async function () {
  try {
    const response = await fetch(heroUrl);
    const hero = await response.json();

    fetchHeroImage(hero);


  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-container");
  }
})();


function fetchHeroImage(hero) {
  const heroContainer = document.querySelector(".hero-img");
  heroContainer.style.background = `url(${hero.guid.rendered}) no-repeat center`;
}

const productsUrl = baseUrl + "wc/store/products/?per_page=100";

(async function () {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderFeatured(products);

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-container");
  }
})();