// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }

//     clear() {
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }
    
//     delete() {

//     }

//     appendNumber(number) {
//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     chooseOperations(operation) {
//         if (this.curentOperand === '') return;
//         if (this.previousOperand !== '') {
//             this.compute();
//         }
//         this.operation = operation;
//         this.previousOperand = this.currentOperand;
//         this.currentOperand = '';
//     }

//     compute(){

//     }

//     getDisplayNumber(number) {
//         const floatNumber = parseFloat(number);
//         if (isNaN(floatNumber)) return '';
//         return floatNumber.toLocaleString('en');
//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
//         if(this.operation != null){
//             this.previousOperandTextElement.innerText = 
//                 `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
//         }};
// };

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay();
//     });
// });

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperations(button.innerText)
//         calculator.updateDisplay();
//     });
// });




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand');
const currentOperandTextElement = document.querySelector('[data-current-operand');


const add = function (previousOperand, currentOperand) {
    return previousOperand + currentOperand;
}

const compute = function (previousOperand, currentOperand, operator) {
    let computation;
    const prev = parseFLoat(previousOperand);
    const current = parseFLoat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev -  current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    
}