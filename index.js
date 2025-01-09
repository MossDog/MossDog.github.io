console.log("Index.js running...");
//localStorage.removeItem('theme') //Use to simulate new user with no storage

const themeSwitchElement = document.getElementById("theme-switch");
const logoElement = document.getElementById("logo");

// Define the logo assets for dark (sunset) and light (aqua) modes
const darkLogo = "assets/logoDark.png";
const lightLogo = "assets/logoLight.png";

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeSwitchElement.checked = savedTheme === "sunset";
  logoElement.src = savedTheme === "sunset" ? darkLogo : lightLogo;
} else {
  // Default to dark theme (sunset) if no preference is saved
  document.documentElement.setAttribute("data-theme", "sunset");
  logoElement.src = darkLogo;
}

function updateTheme(newTheme) {
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  logoElement.src = newTheme === "sunset" ? darkLogo : lightLogo;
}

// Event listener to toggle the theme and logo
themeSwitchElement.addEventListener("change", () => {
  const newTheme = themeSwitchElement.checked ? "sunset" : "aqua";
  updateTheme(newTheme);
});

