/* eslint-disable */

//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let RandomNumber = function() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};

let RandomSymbol = function() {
  let symbol = ["heart", "spade", "diamond", "club"];
  let indexSymbol = Math.floor(Math.random() * symbol.length);
  return symbol[indexSymbol];
};

window.onload = function() {
  document.querySelector(".card").classList.add(RandomSymbol());
  document.querySelector(".card").innerHTML = RandomNumber();
};
