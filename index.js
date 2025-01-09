console.log("Index.js running...")

const themeSwitchElement = document.getElementById("theme-switch");
const logoElement = document.getElementById("logo");
const imgSrc = "http://ec2-34-201-67-49.compute-1.amazonaws.com/public/images/"

// Define the logo assets for light and dark modes
darkLogo = "logoDark.png"
lightLogo = "logoLight.png"

// Event listener to toggle the logo on theme switch
themeSwitchElement.addEventListener("change", () => {
  logoElement.src = imgSrc + (themeSwitchElement.checked ? darkLogo : lightLogo);
});


