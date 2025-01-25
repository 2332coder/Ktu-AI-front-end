const hamburger = document.querySelector("topbar-button");
const sidebar = document.querySelector(".sidebar-div");

hamburger.addEventListener("click", function () {
  sidebar.style.backgroundColor = "blue"; // Changes background color to blue
});