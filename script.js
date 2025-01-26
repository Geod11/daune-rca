const hamMenuButton = document.querySelector(".hamburgerMenu");
const hamMenuOptions = document.querySelector(".menuList");
let isHamMenuExtended = false;
const windowWidth = window.innerWidth;
const facebookElement = document.querySelector("#facebookElement");

if (windowWidth < 700) {
  hamMenuOptions.style.display = "none";
}

function headerMenuDisplay() {
  if (isHamMenuExtended === false) {
    hamMenuOptions.style.display = "block";
    isHamMenuExtended = true;
  } else {
    hamMenuOptions.style.display = "none";
    isHamMenuExtended = false;
  }
}
hamMenuButton.addEventListener("click", headerMenuDisplay);
