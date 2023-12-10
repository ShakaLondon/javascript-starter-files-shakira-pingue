import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";


const populationButton = document.createElement("button");
const populationButtonText = document.createTextNode("show Population");
populationButton.addEventListener("click", displayPopulation);
populationButton.appendChild(populationButtonText);
document.body.appendChild(populationButton);  

// const fruitArray = [ "papaya", "orange", "apple", "pear", "dragonfruit", "pineapple", "kiwi" ];

createListOfFruits(fruits);

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

document
  .querySelector("#remove-handler-button")
  .addEventListener("click", removeHandler);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}

function removeHandler() {
    document.querySelector("#remove-handler").removeEventListener("mousemove", randomNumber)
  }
