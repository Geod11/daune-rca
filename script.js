const hamMenuButton = document.querySelector(".hamburgerMenu");
const hamMenuOptions = document.querySelector(".menuList");
let isHamMenuExtended = false;
const windowWidth = window.innerWidth;

function headerMenuDisplay() {
  if (isHamMenuExtended === false) {
    hamMenuOptions.style.display = "block";
    isHamMenuExtended = true;
  } else {
    hamMenuOptions.style.display = "none";
    isHamMenuExtended = false;
  }

  // function wideScreenDisplay(windowWidth) {
  //   if (windowWidth < 700)
  //     windowWidth.hamMenuButton.addEventListener("change", windowWidth);
  //   else {
  //     hamMenuOptions.style.display = "flex";
  //     isHamMenuExtended = false;
  //     console.log(isHamMenuExtended);
  //     console.log(windowWidth);
  //   }
  // }
  // if (windowWidth < 700) {
  //   headerMenuDisplay;
  // } else {
  //   hamMenuOptions.style.display = "flex";
  //   isHamMenuExtended = false;
  //   console.log(isHamMenuExtended);
  //   console.log(windowWidth);
  // }
}
hamMenuButton.addEventListener("click", headerMenuDisplay);
