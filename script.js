const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand');
const currentOperandTextElement = document.querySelector('[data-current-operand');
let currentOperand = '';
let previousOperand = '';
let operator;


function clear() {
    previousOperandTextElement.innerText = '';
    currentOperandTextElement.innerText = '';
    operator = undefined;
    currentOperand = '';
    previousOperand = '';
}

function $delete() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(operation) {
    if(currentOperand === '') return;
    if(previousOperand !== '') {
        compute(previousOperand, currentOperand, operation);
    };
    operator = operation;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute(num1, num2, operation) {
    let computation;
    const prev = parseFloat(num1);
    const current = parseFloat(num2);
    if(isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev -  current;
            break;
        case 'x':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    };
    currentOperand = computation;
    operator = undefined;
    previousOperand = ''; 

};

function getDisplayNumber(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return '';
    return floatNumber.toLocaleString('en');
}

function updateDisplay() {
    currentOperandTextElement.innerText = getDisplayNumber(currentOperand);
    if(operator != null) {
        previousOperandTextElement.innerText = `${getDisplayNumber(previousOperand)} ${operator} ${currentOperand}`;
    }

}

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        appendNumber(button.innerText);
        updateDisplay();
    });
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        chooseOperation(button.innerText);
        updateDisplay();
    })
})

allClearButton.addEventListener('click',() => {
    clear();
})

equalsButton.addEventListener('click',() => {
    compute(previousOperand, currentOperand, operator);
    updateDisplay();
})

deleteButton.addEventListener('click',() => {
    $delete();
    updateDisplay();
})

window.onload = clear();