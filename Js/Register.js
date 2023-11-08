document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = form.querySelector('input[name="firstName"]').value;
    const lastName = form.querySelector('input[name="lastName"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        showToast("Registration successful!");
      } else if (response.status === 409) {
        showToast("User Already Exists");
      } else if (response.status === 400) {
        showToast("Password Required");
      } else if (response.status === 500) {
        showToast("Internal Server error");
      }
    } catch (error) {
      console.error(error);
    }
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");

    setTimeout(function () {
      toast.classList.add("hidden");
    }, 3000); // Hide the toast after 3 seconds (adjust as needed)
  }
});
