document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  const registerForm = document.getElementById("register-form");

  // Define the HeaderContainer component
  function HeaderContainer() {
    return "Header Content"; // You can replace this with your header content
  }

  // Define the handleChange function
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    formData[name] = value;
  }

  // Define the handleRegisterForm function
  async function handleRegisterForm(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://comfort-path.onrender.com/register",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Show a success toast (You will need to implement this)
        console.log("Registration successful!");
      }
    } catch (error) {
      // Show an error toast (You will need to implement this)
      console.error("Internal Server error");
    }
  }

  // Add an event listener to the form for form submission
  registerForm.addEventListener("submit", handleRegisterForm);

  // Initial formData object
  const formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  // Render the HeaderContainer component
  headerContainer.innerHTML = HeaderContainer();
});
