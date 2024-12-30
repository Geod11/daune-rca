const hamMenuButton = document.querySelector(".hamburgerMenu");
const hamMenuOptions = document.querySelector(".menuList");
let isHamMenuExtended = false;
const windowWidth = window.innerWidth;

console.log(windowWidth);
console.log(isHamMenuExtended);

function headerMenuDisplay() {
  if (isHamMenuExtended === false && windowWidth < 700) {
    hamMenuOptions.style.display = "block";
    isHamMenuExtended = true;
  }
  // if (windowWidth < 700) {
  //   hamMenuOptions.style.display = "flex";
  //   isHamMenuExtended = true;
  // }
  if (isHamMenuExtended === true && windowWidth < 700) {
    hamMenuOptions.style.display = "block";
    isHamMenuExtended = false;
  } else {
    hamMenuOptions.style.display = "flex";
  }
}

hamMenuButton.addEventListener("click", headerMenuDisplay);
