// Initialize the cart array from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  // Save the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to remove a product from the cart by its index
function removeFromCart(index) {
  cart.splice(index, 1);
  // Save the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to display the cart's contents on the "AddToCart.html" page
function displayCart() {
  const cartContainer = document.getElementById("cart");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = "";
    cart.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
        <div class="cart-item">
          <span>${product.name}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      cartContainer.appendChild(productElement);
    });
  }
}

// Call the displayCart function to initially display the cart
displayCart();
