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

function updateDisplay() {
    const display = document.querySelector('.display-input');
    if (displayValue === "Cannot divide by zero") {
        display.value = "Cannot divide by zero";
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
        displayValue += button.value;
        updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = displayValue;
        operator = button.value;
        displayValue = "";
    })
});

equalsButton.addEventListener("click", () => {
    secondNumber = displayValue;
    displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
    updateDisplay();
});

// logic (default):
// 1. when a number (operand) is clicked, the operandButton event listener is triggered
// 2. when operandButton event listener is triggered, the value of the button is added to the displayValue
// 3. this displayValue is then displayed on the calculator screen
// 4. when an operator is clicked, the operatorButton event listener is triggered
// 5. then, the firstNumber is assigned the value of the displayValue
// 6. we set the operator to the value of the button clicked
// 7. we then reset the displayValue to an empty string in order to allow the user to enter the second number
// 8. when the equals button is clicked, the equalsButton event listener is triggered
// 9. the secondNumber is assigned the value of the displayValue (which is the second number entered by the user)
// 10. we then call the operate function with the operator, firstNumber and secondNumber as arguments
// 11. the result of the operation is then assigned to the displayValue
// 12. the displayValue is then displayed on the calculator screen using the updateDisplay function

clearButton.addEventListener("click", () => {
    console.log("AC");
});

signButton.addEventListener("click", () => {
    console.log("+/-");
});

percentButton.addEventListener("click", () => {
    console.log("%");
});

decimalButton.addEventListener("click", () => {
    console.log(".");
});