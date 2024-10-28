
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') return;
        if (button.id === 'equal') return;

        currentInput += button.textContent;
        display.value = currentInput;
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
});

equalButton.addEventListener('click', () => {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});
