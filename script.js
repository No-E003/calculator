//addition func
let add = (a,b) => Number(a) + Number(b);

//sub function
let sub = (a,b) => Number(a) - Number(b);

//divide func
let divide = (a,b) => Number(a)/Number(b);

//multiply func
let multiply = (a,b) => Number(a) * Number(b);


//Operate Function
function operate(a,b,operator) {
  if(operator == "+") {
    result = add(a,b);
  }
  else if(operator == "-") {
    result = sub(a,b);
  }
  else if(operator == "x") {
    result = multiply(a,b);
  }
  else {
    result = divide(a,b);
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
  display1.textContent = previousValue + " " + operator + " " + currentValue;
  operate(previousValue,currentValue,operator)
  display2.textContent = result;   
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

//figure out how to store values in seperate variables
//once you have that, you can plug it in the opertate function and the system should work

