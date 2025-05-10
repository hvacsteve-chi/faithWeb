const appHead = document.querySelector("head");

const appBody = document.querySelector("body");

const appHeader = document.querySelector("header");

const appRibbon = document.querySelector(".ribbon");

const appMain = document.querySelector("main");

const appFooter = document.querySelector("footer");

console.log(appHead, appBody, appMain, appFooter, appHeader, appRibbon);

let appHeaderSizer, appRibbonSizer, appHeadingSizer;

appHeaderSizer = appHeader.clientHeight;

appRibbonSizer = appRibbon.clientHeight;

appHeadingSizer = appHeaderSizer + appRibbonSizer + 48;

console.log(appHeadingSizer);

let ourCurrentYear;

ourCurrentYear = new Date().getFullYear();
console.log(ourCurrentYear);

document.getElementById("dateNow1").innerHTML = 'ourCurrentYear';