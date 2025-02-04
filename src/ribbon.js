let HeroFlex = document.querySelector(".hero");
let RibbonNow = document.querySelector(".ribbon");
onload = () => {
  setTimeout(myTimeout1, 1500);
  function myTimeout1() {
    RibbonNow.style.backgroundColor = "hsla(0, 100%, 50%, 0.87)";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout2, 1750);
  function myTimeout2() {
    RibbonNow.style.backgroundColor = "transparent";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
  }
  setTimeout(myTimeout3, 2000);
  function myTimeout3() {
    RibbonNow.style.backgroundColor = "hsla(0, 100%, 50%, 0.67)";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout4, 2250);
  function myTimeout4() {
    RibbonNow.style.backgroundColor = "transparent";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout5, 2500);
  function myTimeout5() {
    RibbonNow.style.backgroundColor = "hsla(0, 100%, 50%, 0.67)";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout6, 2750);
  function myTimeout6() {
    RibbonNow.style.backgroundColor = "transparent";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout7, 3000);
  function myTimeout7() {
    RibbonNow.style.backgroundColor = "hsla(0, 100%, 50%, 0.87)";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = ".22s";
  }
  setTimeout(myTimeout8, 6000);
  function myTimeout8() {
    RibbonNow.style.backgroundColor = "hsl(240, 4%, 14%)";
    RibbonNow.style.color = "hsl(225,0%,70%)";
    RibbonNow.style.transition = "transform background-color 245ms ease-in-out";
    RibbonNow.style.transitionDuration = "4s";
  }
  setTimeout(myTimeoutClose, 16000);
  function myTimeoutClose() {
    RibbonNow.style.visibility = "hidden";
    RibbonNow.style.opacity = 0;
    RibbonNow.style.transition =
      "transform opacity 245ms, visibility 245ms ease-out";
    RibbonNow.style.transitionDuration = "8s";
    RibbonPara.textContent = "Est: Winter 2025";
    HeroFlex.style.transition = "transform all 245ms ease-out";
  }
};

let RibbonPara = document.querySelector(".ribbonp");

let RibbonCloser = document.querySelector("#ribbonCloser");

function CloseRibbon() {
  let X = RibbonNow;
  X.style.visibility = "hidden";
  X.style.opacity = 0;
}

RibbonCloser.addEventListener("click", CloseRibbon);
