// DOM helpers
const grab = (selector) => document.querySelector(selector);
const grabAll = (selector) => document.querySelectorAll(selector);
const listen = (node, e, callback) => node.addEventListener(e, callback);
const render = (node, markUp, add = false) =>
  add ? (node.innerHTML += markUp) : (node.innerHTML = markUp);
// HTML helpers
const htmlEl = (elName, className, attributes = "") =>
  `<${elName} class="${className}" ${attributes}>${
    className.split(" ").reverse()[0]
  }</${elName}>`;
const markUp = (elArr) => elArr.reduce((acc, el) => (acc += el), "");
// App elements
const header = htmlEl("header", "grid-item header");
const mainMenu = htmlEl("menu", "grid-item main-menu main-menu--left");
const profileMenu = htmlEl(
  "menu",
  "grid-item profile-menu profile-menu--right"
);
const main = htmlEl("main", "grid-item main");
const aside = htmlEl("aside", "grid-item aside");
const footer = htmlEl("footer", "grid-item footer");
// Build App content
const container = grab(".container"); // Grab initial node
const elArr = [header, mainMenu, profileMenu, main, aside, footer]; // list app content
const elements = markUp(elArr); // create markup
render(container, elements); // Initial app rendering

// main menu functionality
const menuState = {
  "grid-row-end": "-1",
  "grid-column-end": "3",
};

const mainMenuNode = grab(".main-menu--left");
console.log(mainMenuNode);
listen(mainMenuNode, "click", (e) => {
  if (!e.target.style["grid-row-end"]) {
    e.target.style["grid-row-end"] = menuState["grid-row-end"];
    menuState["grid-row-end"] = "auto";
    e.target.style["grid-column-end"] = menuState["grid-column-end"];
    menuState["grid-colum-end"] = "auto";
  } else if (menuState["grid-row-end"] === "auto") {
    menuState["grid-row-end"] = e.target.style["grid-row-end"];
    e.target.style["grid-row-end"] = "auto";
    menuState["grid-column-end"] = e.target.style["grid-column-end"];
    e.target.style["grid-column-end"] = "auto";
  } else {
    e.target.style["grid-row-end"] = menuState["grid-row-end"];
    menuState["grid-row-end"] = "auto";
    e.target.style["grid-column-end"] = menuState["grid-column-end"];
    menuState["grid-column-end"] = "auto";
  }
});
