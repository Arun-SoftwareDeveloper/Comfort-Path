document.addEventListener("DOMContentLoaded", function () {
  const payButton = document.getElementById("payButton");

  payButton.addEventListener("click", function () {
    // Example: Simulating a successful payment
    const orderData = {
      amount: 1000, // Replace with the actual amount in paisa (e.g., 1000 for 10 INR)
    };

    // Create a new order on your backend and get the order ID
    fetch("http://localhost:4000/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((orderData) => {
        if (orderData.id) {
          const options = {
            key: razorpayKey,
            amount: orderData.amount,
            currency: "INR",
            name: "Your Company Name",
            description: "Payment for Order",
            order_id: orderData.id,
            handler: function (response) {
              // Handle the payment success on your backend
              fetch("http://localhost:4000/payment/success", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.success) {
                    alert(
                      "Payment successful. An email confirmation has been sent."
                    );
                  } else {
                    alert("Payment processing failed");
                  }
                });
            },
          };

          const rzp = new Razorpay(options);
          rzp.open();
        } else {
          alert("Failed to create the payment order");
        }
      });
  });
});
