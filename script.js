let numbers = document.querySelectorAll("#num");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");
let operators = document.querySelectorAll("#op");
let result = "";
let currentValue = "";
let operator = "";
let previousValue = "";

//Initializing calculator once a button is pressed
numbers.forEach((number) => number.addEventListener("click", function(e) {
  handleNumber(e.target.textContent)
  display2.textContent = currentValue;
}))

//Stores button values in appropriate variable and displays it
operators.forEach((op) => op.addEventListener("click", function(e) {
  handleOperator(e.target.textContent)
  display1.textContent = previousValue + " " + operator;
  display2.textContent = currentValue;
}))

//triggers cleaning all varaibales values and screen
clear.addEventListener("click", function() {
  clearBtn();
})

//solves the equation depending on the variables values and operator
equal.addEventListener("click", function() {
  calculate();
  display1.textContent = "";
  if(previousValue.length <= 7) {
    display2.textContent = previousValue;
  } else {
    display2.textContent = previousValue.slice(0,7) + "...";
  }
})

//allows for decimal
decimal.addEventListener("click", function() {
  addDecimal();
})

//sets a max amount of numbs
function handleNumber(num) {
  if(currentValue.length <= 7) {
    currentValue +=num;
  }
}

//stores the operator value and moves values from current value to previous value
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

//calcualtes the two numbs based on operator
function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if(operator === "+") {
    previousValue += currentValue;
  } else if(operator === "-") {
    previousValue -= currentValue;
  } else if(operator === "x") {
    previousValue *= currentValue;
  } else{
    previousValue /= currentValue;
  }
  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(num) {
  return Math.round(num * 1000)/1000;
}

function addDecimal() {
  if(!currentValue.includes('.')) {
    currentValue += '.';
  }
}

//clear all
function clearBtn() {
  currentValue = "";
  previousValue = "";
  operator = "";
  display1.innerHTML = "";
  display2.innerHTML = "";
}