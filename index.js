console.log("Hello There")

const themeSwitch = document.getElementById("theme-switch");
const logo = document.getElementById("logo");
const imgSrc = "http://ec2-54-144-213-152.compute-1.amazonaws.com:3000/public/images/"

// Define the logo assets for light and dark modes


// Event listener to toggle the logo on theme switch
themeSwitch.addEventListener("change", () => {
  if(themeSwitch.checked){
    logo.src = imgSrc + "/logoDarkCroppedSmall1.png"
  }else{
    logo.src = imgSrc + "logoLightCroppedSmall1.png"
  }
  logo.src = themeSwitch.checked ? darkLogo : lightLogo;
});


