// Select the nav-links element
const navLinks = document.getElementById("navLinks");
console.log("navLinks:", navLinks); // Debug: Verify element is found

// Function to show the menu
function showMenu() {
  console.log("Showing menu");
  if (navLinks) {
    navLinks.style.right = "0";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  } else {
    console.error("navLinks element not found");
  }
}

// Function to hide the menu
function hideMenu() {
  console.log("Hiding menu");
  if (navLinks) {
    navLinks.style.right = "-200px";
    document.body.style.overflow = "auto"; // Restore scrolling
  } else {
    console.error("navLinks element not found");
  }
}

// Close menu when a link is clicked
const navLinksItems = document.querySelectorAll(".nav-links ul li a");
console, log("navLinksItems:", navLinksItems); // Debug: Verify links are found
navLinksItems.forEach((item) => {
  item.addEventListener("click", hideMenu);
});
