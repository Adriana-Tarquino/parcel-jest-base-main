import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


const first1 = document.querySelector("#primer-mult");
const second1 = document.querySelector("#segundo-mult");
const form1 = document.querySelector("#multipli-form");
const mult = document.querySelector("#resultado-mult");

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const first= Number.parseInt(first1.value);
  const second = Number.parseInt(second1.value);

  //mult.innerHTML = "<p>" * multiplicar(first, second) + "</p>";
  mult.innerHTML = "<p>"+ first * second + "</p>"
});