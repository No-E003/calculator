
//clear all
function clearBtn() {
  currentValue = "";
  previousValue = "";
  operator = "";
  display1.innerHTML = "";
  display2.innerHTML = "";
}


// assigned variables for calculator
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

operators.forEach((op) => op.addEventListener("click", function(e) {
  handleOperator(e.target.textContent)
  display1.textContent = previousValue + " " + operator;
  display2.textContent = currentValue;
}))

clear.addEventListener("click", function() {
  clearBtn();
})

equal.addEventListener("click", function() {
  calculate();
  display1.textContent = "";
  if(previousValue.length <= 5) {
    display2.textContent = previousValue;
  } else {
    display2.textContent = previousValue.slice(0,5) + "...";
  }
})

decimal.addEventListener("click", function() {
  addDecimal();
})






function handleNumber(num) {
  if(currentValue.length <= 5) {
    currentValue +=num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

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

//This is thought that I initially had
//Break, Continue, etc. doesnt work on if loops 
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if(button.id == "clear") {
//       clear();
//     }
//     if(button.id == "num") {
//       display1.innerHTML += button.value;
//       operand2 += button.value;
//     }
//      if(button.id == "op") {
//       display2.innerHTML = button.value;
//       operator = button.value;
//       operand1 += operand2
//     }
//     if(button.id == "num") {
//       operand2 = "";
//       operand2 += button.value;
//     }
//   })
// })

