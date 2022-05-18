function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return sub(num1, num2);
            break;
        case 'X':
            return mult(num1, num2);
            break;
        case '/':
            return div(num1, num2);
            break;
    }
}


const display = document.getElementById('display-txt');
const btns = document.querySelectorAll('.nums');
const ops = document.querySelectorAll('.operators');

// Populate display by pressing number buttons
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.innerText += btn.innerText;
    });
});


// Store values by pressing operator buttons
let values = [];

ops.forEach((op) => {
    op.addEventListener('click', () => {
        values.push(op.innerText);
        values.push(parseFloat(display.innerText));
        display.innerText = '';
    });
});


// Run operation by pressing '='
const btnEqual = document.getElementById('equal');

btnEqual.addEventListener('click', () => {
    values.push(parseFloat(display.innerText));

    let result = operate(values[0], values[1], values[2]);
    display.innerText = String(result);

    values = [];
});


// TODO: Clear values by pressing 'AC'

// TODO: Delete last digit by pressing 'DEL'