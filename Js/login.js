document.addEventListener("DOMContentLoaded", function () {
  // Get the form element and add a submit event listener
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get the user's email and password from the form
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    // Perform an AJAX request using Axios
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful login
        alert("Login Successful");
      } else if (response.status === 403) {
        // User not found, show an error message
        alert("Not a User, Please register");
      }
    } catch (error) {
      // Internal server error, show an error message
      alert("Internal Server Error");
    }
  });
});
