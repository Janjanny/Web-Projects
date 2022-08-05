let number1 = 8;
let number2 = 2;

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');

num1.textContent = number1;
num2.textContent = number2;

function add () {
    let sum = number1 + number2;
    result.textContent = "SUM: " + sum;
    
}

document.getElementById("subtract").addEventListener("click",() => {
    let diff = number1 - number2;
    result.textContent = "DIFFERENCE: " + diff;
})

document.getElementById("multiply").addEventListener("click", () => {
    let product = number1 * number2;
    result.textContent = "PRODUCT: " + product;
})

document.getElementById("divide").addEventListener("click", () => {
    let quotient = number1/number2; 
    result.textContent = "QUOTIENT: " + quotient;
})