// Mobile menu toggle
function showMenu() {
  const nav = document.getElementById("navLinks");
  const navBar = document.querySelector(".nav-bar");
  nav.style.right = "0"; // Open menu
  navBar.classList.add("hide-icons"); // Hide menu icon
  nav.classList.add("hide-icons"); // Hide close icon
  document.getElementById("closeMenu").style.display = "block"; // Show close icon
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function hideMenu() {
  const nav = document.getElementById("navLinks");
  const navBar = document.querySelector(".nav-bar");
  nav.style.right = "-200px"; // Close menu
  navBar.classList.remove("hide-icons"); // Show menu icon
  nav.classList.remove("hide-icons"); // Show close icon
  document.getElementById("openMenu").style.display = "block"; // Show menu icon
  document.getElementById("closeMenu").style.display = "none"; // Hide close icon
  document.body.style.overflow = "auto"; // Allow scrolling
}

// Modal trigger
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("inquiryModal");
  const openBtn = document.querySelector(".Message");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => (modal.style.display = "flex")); // Open modal
  closeBtn.addEventListener("click", () => (modal.style.display = "none")); // Close modal
  window.addEventListener(
    "click",
    (e) => e.target === modal && (modal.style.display = "none")
  ); // Close modal on outside click
});
