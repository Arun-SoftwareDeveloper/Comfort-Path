const products = [
  {
    name: "NIKE-AIRJORDAN",
    description:
      "The newly-surfaced retro primarily boasts a “colorless” arrangement throughout its upper and sole unit.",
    images: [
      "../Images/nike-airjordan.webp",
      "../Images/nike-airjordan2.jpg",
      "../Images/nike-airjodan3.jpg",
    ],
  },
  {
    name: "CONVERSE-ALLSTAR",
    description:
      "A color-soaked classic from high top to toe, the Chuck Taylor All Star sneaker stays forever fresh to give an Aesthetic Look for your foots.",
    images: [
      "../Images/converse1.webp",
      "../Images/converse2.webp",
      "../Images/converse3.webp",
    ],
  },
  {
    name: "LOUIS VUITTON",
    description:
      " Louis Vuitton designs shoes for men to fit every occasion elegant derbies and refined richelieus for casuals.",
    images: ["../Images/LV1.webp", "../Images/LV2.webp", "../Images/LV3.webp"],
  },
  {
    name: "PUMA-MOTOSPORT",
    description:
      "  Supreme performance reaches the peak of fan style in our BMW M  Motorsports Drift Cat 8 shoe(specially for the motosport-bikers).",
    images: [
      "../Images/puma-motosport1.webp",
      "../Images/puma-motosport2.jpeg",
      "../Images/puma-motosport3.webp",
    ],
  },
  {
    name: "COLEHAAN",
    description:
      "The perfect balance of traction and flexibility combine.The hybrid outsoles, which are part smooth leather and part rubber, are especially good.",
    images: [
      "../Images/colehaan1.jpg",
      "../Images/colehaan2.jpg",
      "../Images/colehaan3.jpg",
    ],
  },
  {
    name: "ADIDAS-ORIGINALS",
    description:
      "Adidas Originals high tops channeling retro hoops style with high top sneakers or toning it down with a casual shoe,there's a perfect look for you.",
    images: [
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/28ec92bd7e2547b09caeaf3f00f6ffe8_9366/FZ6332_02_standard_hover.jpg",
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b6facc3c75d849c2900caf3f00f6369a_9366/FZ6332_01_standard.jpg",
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c3951fe10d21450ab2cdaf3f00f802a5_9366/FZ6332_04_standard.jpg",
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
           <button class="btn btn-primary" id="buyButton${index}">Buy Now</button>
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
             <button class="btn btn-primary" id="buyButton${index}">Buy Now</button>
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
