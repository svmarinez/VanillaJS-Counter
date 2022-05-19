import "./styles.css";

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.querySelector("h1");
let count = 0;

add.addEventListener("click", addOne);
subtract.addEventListener("click", subtractOne);

function addOne() {
  count++;
  result.textContent = count;
}

function subtractOne() {
  count--;
  result.textContent = count;
}
