document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = form.querySelector('input[name="firstName"]').value;
    const lastName = form.querySelector('input[name="lastName"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    try {
      const response = await axios.post("http://localhost:4000/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 200) {
        alert("Registration successful!");
      }
    } catch (error) {
      alert("Internal Server error");
      console.error(error);
    }
  });
});
