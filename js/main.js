$(document).ready(function () {
    $.get("https://fakestoreapi.com/products", function (data) {
        data.forEach(function (product) {
            $("#product-list").append(`
          <div class="col-md-4">
            <div class="card product-card">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: $${product.price}</p>
                <p class="card-text">Category: ${product.category}</p>
              </div>
            </div>
          </div>
        `);
        });
    });
});
