//addition func
const add = (a,b) => a + b;


//sub function
const sub = (a,b) => a - b;

//divide func
const divide = (a,b) => a/b;

//multiply func
const multiply = (a,b) => a * b;


// //grabs all the buttons
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
// const numbs = document.querySelectorAll("#option");
// const operator = document.querySelectorAll("#operator");
// const decimal = document.querySelector("#decimal");
// const clear = document.querySelector("#clr");
// const del = document.querySelector("#del");

let operand1 = "";
let operand2 = "";
let operator = "";
let sum = ""

//displays button values
 buttons.forEach((button) => {
   button.addEventListener('click', () => {

     if(button.value == "clr") {
      display2.innerHTML = "";
      display1.innerHTML = "";
     } else if(button.id == "num"){
      display2.innerHTML += button.value;
      operand1 += button.value;
     } else if(button.id == "operator"){
      display2.innerHTML += button.value;
      operator += button.value;
     } else if(button.id == "num"){
      display2.innerHTML += button.value;
      operand2 += button.value;
     } else if(button.id == "equal") {
      display1.innerHTML = operand1 + operator + operand2;
     }
   });
 });

//let currentOperator = "null";
//let currentOperation = "null";
