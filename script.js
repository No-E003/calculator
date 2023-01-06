//addition func
const add = (a,b) => Number(a) + Number(b);

//sub function
const sub = (a,b) => Number(a) - Number(b);

//divide func
const divide = (a,b) => Number(a)/Number(b);

//multiply func
const multiply = (a,b) => Number(a) * Number(b);


//Operate Function
function operate(a,b,operator) {
  let result;

  if(operator == "+") {
    result = add(a,b);
    return result;
  }
  else if(operator == "-") {
    result = sub(a,b);
    return result;
  }
  else if(operator == "*") {
    result = multiply(a,b);
    return result;
  }
  else {
    result = divide(a,b);
    return result;
  }
}

//clear all
function clear() {
  operand1 = ""
  operand2 = ""
  display1.innerHTML = "";
  display2.innerHTML = "";
}


// assigned variables for calculator
const buttons = document.querySelectorAll("button");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const operator = document.getElementById("op");
const result = document.getElementById("equal");
let operand1;
let operand2;

//Initializing calculator once a button is pressed
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(button.id == "clear") {
      clear();
    }
    else{
      display1.innerHTML += button.value;
    }
  })
})

//figure out how to store values in seperate variables
//once you have that, you can plug it in the opertate function and the system should work