// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully");

  // Example functionality: Hero button click
  const heroButton = document.querySelector(".hero-text button");
  if (heroButton) {
    heroButton.addEventListener("click", function () {
      alert(
        "Explore Programs clicked! Redirect functionality can be added here."
      );
    });
  }
});
