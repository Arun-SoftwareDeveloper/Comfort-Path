const products = [
  {
    name: "NIKE-AIRMAX",
    description:
      "The Air Max SYSTM brings back everything you love about your favourite '80s vibes (without the parachute trousers).",
    images: [
      "../Images/nike-airmax1.webp",
      "../Images/nike-airmax2.webp",
      "../Images/nike-airmax3.webp",
    ],
  },
  {
    name: "COLEHAAN GrandPrø Wellesley ",
    description:
      "Cole Haan leather products support responsible manufacturing via the Leather Working Group.",
    images: [
      "../Images/colehaan-women1.jpg",
      "../Images/colehaan-women2.jpg",
      "../Images/colehaan-women3.jpg",
    ],
  },
  {
    name: "GUCCI WOMEN ACE SNEAKERS",
    description:
      " Louis Vuitton designs shoes for men to fit every occasion elegant derbies and refined richelieus for casuals.",
    images: [
      "../Images/gucci-women1.jpg",
      "../Images/gucci-women2.jpg",
      "../Images/gucci-women3.jpg",
    ],
  },
  {
    name: "VERSACE CHAIN-REACTION",
    description:
      "A chunkier construction defines the shape, while a metal “ACE” tag shines atop the lace-up closure. ",
    images: [
      "../Images/versace-women1.jpg",
      "../Images/versace-women2.jpg",
      "../Images/versace-women3.jpg",
    ],
  },
  {
    name: "JUST CAVALLI",
    description:
      "Just Cavalli stilettos are a tribute to haute couture fashion. With the snake print that adds a dose of drama to your look.",
    images: [
      "../Images/jc-women1.webp",
      "../Images/jc-women2.webp",
      "../Images/jc-women3.webp",
    ],
  },
  {
    name: "DKNY-BOOTS",
    description:
      "Shop our collection of women's boots and booties. Find tall boots, ankle booties, and more with the iconic DKNY style.",
    images: [
      "../Images/dkny-women1.jpg",
      "../Images/dkny-women2.jpg",
      "../Images/dkny-women3.jpg",
    ],
  },
];

function generateProductCards() {
  const productContainer = document.querySelector(".row");

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
    productCard.innerHTML = `
      <div class="card">
        <div class="carousel slide" data-ride="carousel" id="productCarousel${index}">
          <ol class="carousel-indicators">
            ${product.images
              .map(
                (image, i) =>
                  `<li data-target="#productCarousel${index}" data-slide-to="${i}"${
                    i === 0 ? ' class="active"' : ""
                  }></li>`
              )
              .join("")}
          </ol>
          <div class="carousel-inner">
            ${product.images
              .map(
                (image, i) => `
                <div class="carousel-item${i === 0 ? " active" : ""}">
                  <img src="${image}" class="d-block w-100" alt="Image ${
                  i + 1
                }" />
                </div>`
              )
              .join("")}
          </div>
          <!-- Previous and Next controls here -->
        </div>
        <div class="card-body">
              <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#recipientModal"
      >
        Buy Now
      </button>
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
      </div>
    `;

    productContainer.appendChild(productCard);
  });
}

// Function to filter products based on search input
function filterProducts(searchQuery) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the product container to display the results
  const productContainer = document.querySelector(".row");
  productContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No matching products found.</p>";
  } else {
    filteredProducts.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
      productCard.innerHTML = `
        <div class="card">
          <div class="carousel slide" data-ride="carousel" id="productCarousel${index}">
            <ol class="carousel-indicators">
              ${product.images
                .map(
                  (image, i) =>
                    `<li data-target="#productCarousel${index}" data-slide-to="${i}"${
                      i === 0 ? ' class="active"' : ""
                    }></li>`
                )
                .join("")}
            </ol>
            <div class="carousel-inner">
              ${product.images
                .map(
                  (image, i) => `
                  <div class="carousel-item${i === 0 ? " active" : ""}">
                    <img src="${image}" class="d-block w-100" alt="Image ${
                    i + 1
                  }" />
                  </div>`
                )
                .join("")}
            </div>
            <!-- Previous and Next controls here -->
          </div>
          <div class="card-body">
               <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#recipientModal"
      >
        Buy Now
      </button>
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
        </div>
      `;

      productContainer.appendChild(productCard);
    });
  }
}

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput").value;
  filterProducts(searchInput);
});

// Event listener for Enter key in the search input
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchInput = document.getElementById("searchInput").value;
      filterProducts(searchInput);
    }
  });

// Initial display of all products
generateProductCards();
