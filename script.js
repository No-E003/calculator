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


//displays button values
 buttons.forEach((button) => {
   button.addEventListener('click', () => {
     input = button.value;
     display1.innerHTML += input;
   })
 });

//let currentOperator = "null";
//let currentOperation = "null";
