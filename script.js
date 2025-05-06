let currentInput = '';
let previousInput = '';
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentInput === '') return; // If no number is entered
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
