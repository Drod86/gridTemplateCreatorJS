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
const header = htmlEl(
  "header",
  "grid-item header",
  'style="border: 1px solid black"'
);
const main = htmlEl(
  "main",
  "grid-item main",
  'style="border: 1px solid black"'
);
const aside = htmlEl(
  "aside",
  "grid-item aside",
  'style="border: 1px solid black"'
);
const footer = htmlEl(
  "footer",
  "grid-item footer",
  'style="border: 1px solid black"'
);
// Build App content
const container = grab(".container"); // Grab initial node
const elArr = [header, main, aside, footer]; // list app content
const elements = markUp(elArr); // create markup
render(container, elements); // Initial app rendering
