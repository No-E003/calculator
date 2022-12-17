//addition func
const add = (a,b) => a + b;
console.log(add(4,6));
console.log(add(4,0))
console.log(add(3.1,6))

//sub function
const sub = (a,b) => a - b;

console.log(sub(-5,4));
console.log(sub(4,6));
console.log(sub(6,5));
console.log(sub(2.5,1));

//divide func
const divide = (a,b) => a/b;
console.log(divide(4,2));

//multiply func
const multiply = (a,b) => a * b;

console.log(multiply(6,10));
console.log(multiply(0,10));
console.log(multiply(6.545,10));
console.log(multiply(-6,10));

//grabs all the buttons
const buttons = document.querySelectorAll("button");
const display = document.getElementById("#display");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input = button.value;
    document.getElementById("display").innerHTML = input;
  });
});

//document.getElementById("display").innerHTML = 5 + 6;
//let btns = document.getElementsByClassName(".option");



// btns.addEventListener("click", () => {
//   document.getElementsByClassName(".display").value
// }) 