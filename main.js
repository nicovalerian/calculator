function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isNewNumber = false;

function updateDisplay() {
    const display = document.querySelector('.display-input');
    if (displayValue === "Cannot divide by zero") {
        display.value = "Cannot divide by zero";
        displayValue = "";
    } else if (displayValue === "Invalid operator") {
        display.value = "Invalid operator";
        displayValue = "";
    } else { 
        display.value = displayValue;
    }
}

const operandButtons = document.querySelectorAll(".operand-btn");
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equals-btn');
const clearButton = document.querySelector('.clear-btn');
const signButton = document.querySelector('.sign-btn');
const percentButton = document.querySelector('.percent-btn');
const decimalButton = document.querySelector('.decimal-btn');

operandButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (isNewNumber) {
            displayValue = "";
            isNewNumber = false;
        }

        if (button.value === '0' && displayValue === "") {// if the user clicks 0 without entering any other number
            return;
        }

        displayValue += button.value;
        updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber === "" && displayValue === "") { // if the user clicks an operator without entering a number
            return;
        }

        if (operator !== "") { // if the user clicks an operator after entering the first number and operator}
            secondNumber = displayValue;
            displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
            updateDisplay();
        }

        firstNumber = displayValue;
        operator = button.value;
        displayValue = "";
        isNewNumber = true;
    })
});

equalsButton.addEventListener("click", () => {
    if (firstNumber === "" || operator === "") { // if the user clicks the equals button without entering a number or operator
        return;
    }

    secondNumber = displayValue;
    console.log(Number(firstNumber), operator, Number(secondNumber));
    displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
    updateDisplay();
    operator = "";
    isNewNumber = true;
});

clearButton.addEventListener("click", () => {
    // clear the display and reset the variables
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    
    const display = document.querySelector('.display-input');
    display.value = "0";
});

signButton.addEventListener("click", () => {
    if (displayValue !== "") {
        displayValue = displayValue * -1;
        updateDisplay();
    }
});

percentButton.addEventListener("click", () => {
    console.log("%");
});

decimalButton.addEventListener("click", () => {
    console.log(".");
});