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

const operandButtons = document.querySelectorAll(".operand-btn");
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equals-btn');
const clearButton = document.querySelector('.clear-btn');
const signButton = document.querySelector('.sign-btn');
const percentButton = document.querySelector('.percent-btn');
const decimalButton = document.querySelector('.decimal-btn');

operandButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.value);
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.value);
    })
});

equalsButton.addEventListener("click", () => {
    console.log("=");
});

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