const products = [
  {
    name: "NIKE-AIRMAX",
    description:
      "The Air Max SYSTM brings back everything you love about your favourite '80s vibes (without the parachute trousers).",
    images: [
      "./Images/nike-airmax1.webp",
      "./Images/nike-airmax2.webp",
      "./Images/nike-airmax3.webp",
    ],
  },
  {
    name: "COLEHAAN GrandPrø Wellesley ",
    description:
      "Cole Haan leather products support responsible manufacturing via the Leather Working Group.",
    images: [
      "./Images/colehaan-women1.jpg",
      "./Images/colehaan-women2.jpg",
      "./Images/colehaan-women3.jpg",
    ],
  },
  {
    name: "GUCCI WOMEN ACE SNEAKERS",
    description:
      " Louis Vuitton designs shoes for men to fit every occasion elegant derbies and refined richelieus for casuals.",
    images: [
      "./Images/gucci-women1.jpg",
      "./Images/gucci-women2.jpg",
      "./Images/gucci-women3.jpg",
    ],
  },
  {
    name: "VERSACE CHAIN-REACTION",
    description:
      "A chunkier construction defines the shape, while a metal “ACE” tag shines atop the lace-up closure. ",
    images: [
      "./Images/versace-women1.jpg",
      "./Images/versace-women2.jpg",
      "./Images/versace-women3.jpg",
    ],
  },
  {
    name: "JUST CAVALLI",
    description:
      "Just Cavalli stilettos are a tribute to haute couture fashion. With the snake print that adds a dose of drama to your look.",
    images: [
      "./Images/jc-women1.webp",
      "./Images/jc-women2.webp",
      "./Images/jc-women3.webp",
    ],
  },
  {
    name: "ADIDAS-ORIGINALS",
    description:
      "Adidas Originals high tops channeling retro hoops style with high top sneakers or toning it down with a casual shoe,there's a perfect look for you.",
    images: [
      "./Images/dkny-women1.jpg",
      "./Images/dkny-women2.jpg",
      "./Images/dkny-women3.jpg",
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
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
      </div>
    `;

    productContainer.appendChild(productCard);
  });
}

// Call the function to generate product cards
generateProductCards();
