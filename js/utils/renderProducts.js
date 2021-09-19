export function renderProducts(products) {
  const productsContainer = document.querySelector(".products-container");

  productsContainer.innerHTML = "";

  products.forEach((product) => {

    const productName = product.name ? product.name : "Unknown name";
    const productPrice = product.prices.price ? product.prices.price : "Unknown price";

    productsContainer.innerHTML += `<a class="product" href="details.html?id=${product.id}">
            <div class="product-img card-img-top" style="background-image: url('${product.images[0].src}');"></div>
                                    <div class="card-body">
                                        <h4 class="card-title">${productName}</h4>
                                        <p "card-text">${product.prices.currency_symbol} ${productPrice}</p>
                                        </div>
                                    </a>`;
  });
}