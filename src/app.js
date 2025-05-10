let appHead, appBody, appHeader, appRibbon, appMain, appFooter;
({head: appHead} = document);
appBody = document.querySelector("body");
appHeader = document.querySelector("header");
appRibbon = document.querySelector(".ribbon");
appMain = document.querySelector("main");
appFooter = document.querySelector("footer");
console.log(appHead, appBody, appMain, appFooter, appHeader, appRibbon);
let {clientHeight: appHeaderSizer} = appHeader, {clientHeight: appRibbonSizer} = appRibbon,
    appHeadingSizer = appHeaderSizer + appRibbonSizer + 48;
console.log(appHeadingSizer);


let ourCurrentYear = new Date().getFullYear();
console.log(ourCurrentYear);

document.getElementById("dateNow1").innerText = "For Us " + ourCurrentYear;