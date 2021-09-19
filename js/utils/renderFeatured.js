export function renderFeatured(featured) {
  const featuredContainer = document.querySelector(".featured-container");

  featuredContainer.innerHTML = "";

  featured.forEach((product) => {

    const productName = product.name ? product.name : "Unknown name";
    const productPrice = product.prices.price ? product.prices.price : "Unknown price";

    if (product.categories[0].name === "featured") {
      featuredContainer.innerHTML += `
        <a class="product" href="details.html?id=${product.id}">
          <div class="col">
            <div class="card">
              <div class="product-img card-img-top" style="background-image: url('${product.images[0].src}');"></div>
              <div class="card-body">
                  <h4 class="card-title">${productName}</h4>
                  <p "card-text">${product.prices.currency_symbol} ${productPrice}</p>
              </div>
            </div>
          </div>
        </a>`;
    }


  });
}