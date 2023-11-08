document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgotPasswordForm");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value;

    try {
      const response = await axios.post(
        "http://localhost:4000/forgotpassword",
        {
          email: email,
        }
      );

      if (response.status === 500) {
        alert("Failed to send reset password email");
      } else if (response.status === 200) {
        alert("Password Reset link sent successfully");
      }
    } catch (error) {
      alert("Internal Server error");
      console.error(error);
    }
  });
});
