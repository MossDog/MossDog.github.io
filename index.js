console.log("Hello There")

const themeSwitch = document.getElementById("theme-switch");
const logo = document.getElementById("logo");

// Define the logo assets for light and dark modes
const lightLogo = "Assets/logoLightCroppedSmall1.png";
const darkLogo = "Assets/logoDarkCroppedSmall1.png";

// Event listener to toggle the logo on theme switch
themeSwitch.addEventListener("change", () => {
  logo.src = themeSwitch.checked ? darkLogo : lightLogo;
});


