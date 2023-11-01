const products = [
  {
    name: "NIKE-Jordan 4 Retro",
    description:
      "The Jordan 4 Retro is inspired by the original AJ4.Made with real and synthetic leather and textile, soft foam cushioning",
    images: [
      "../Images/kids-nike1.webp",
      "../Images/kids-nike2.webp",
      "../Images/kids-nike3.webp",
    ],
  },
  {
    name: "ADIDAS X LEGO®",
    description:
      "ven the iconic shell toe gets a playful 3D makeover inspired by the dots on LEGO® bricks, and positive vibes to the classic.",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/306b9e367c8c4387b5c9af4000f67c7a_9366/adidas_x_LEGOr_Tech_RNR_Elastic_Lace_and_Top_Strap_Shoes_Black_HP5877_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e1404fe0f6249aab54daf5f014b552e_9366/adidas_x_LEGOr_Tech_RNR_Elastic_Lace_and_Top_Strap_Shoes_Black_HP5877_HM2_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/430637d87085428a98e5af4000f6a035_9366/adidas_x_LEGOr_Tech_RNR_Elastic_Lace_and_Top_Strap_Shoes_Black_HP5877_02_standard.jpg",
    ],
  },
  {
    name: "CROCS",
    description:
      "Easy to clean and quick to dry. Adjustable turbo heel straps for a snug, accommodating fit.",
    images: [
      "../Images/kids-crocs1.jpeg",
      "../Images/kids-crocs2.jpeg",
      "../Images/kids-crocs3.jpeg",
    ],
  },
  {
    name: "Aretto Leaps S2",
    description:
      "Tisya loves her Aretto Leaps! She could walk in them comfortably for long hours. They're not only stylish, but also great for travelling.",
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-480,/d76ba9bKL_ARETT00000055_2.jpg?rnd=20200526195200",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-480,/d76ba9bKL_ARETT00000055_4.jpg?rnd=20200526195200",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/tr:w-480,/d76ba9bKL_ARETT00000055_5.jpg?rnd=20200526195200",
    ],
  },
  {
    name: "ADIDAS-ORIGINALS",
    description:
      "Adidas Originals high tops channeling retro hoops style with high top sneakers or toning it down with a casual shoe,there's a perfect look for you.",
    images: [
      "../Images/kids-versace1.jpg",
      "../Images/kids-versace2.jpg",
      "../Images/kids-versace3.jpg",
    ],
  },
  {
    name: "ADIDAS MONOFIT SNEAKERS",
    description:
      "Designed with a symmetrical fit – meaning no more left and right shoes – Monofit empowers your little ones to run as wild as their imaginations",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1217eab616494c47a09faf5100c29feb_9366/Monofit_Slip-On_Shoes_Pink_FZ6585_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a44027e70f54c84b387af5100c2bb76_9366/Monofit_Slip-On_Shoes_Pink_FZ6585_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0349756f367940a9a10faf5100c2d135_9366/Monofit_Slip-On_Shoes_Pink_FZ6585_04_standard.jpg",
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
            <button id="razorpayButton" class="btn btn-success">
        Pay with Razorpay
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
