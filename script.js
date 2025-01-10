const hamMenuButton = document.querySelector(".hamburgerMenu");
const hamMenuOptions = document.querySelector(".menuList");
let isHamMenuExtended = false;
const windowWidth = window.innerWidth;
const facebookElement = document.querySelector("#facebookElement");

const HeaderMobile = `

`;
const HeaderDesktop = `

`;

if (windowWidth < 700) {
  hamMenuOptions.style.display = "none";
}

// facebookElement.addEventListener(
//   "click",
//   window.open(
//     "https://www.facebook.com/profile.php?id=61565389988489",
//     "_blank"
//   )
// );

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
