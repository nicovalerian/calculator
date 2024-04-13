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