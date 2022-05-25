const display = document.getElementById('display-txt');
const btns = document.querySelectorAll('.nums');
const ops = document.querySelectorAll('.operators');

let values = [];


// Populate display by pressing number buttons
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (isNaN(display.innerText)) {
            display.innerText = '';
            values = [];
        }

        display.innerText += btn.innerText;
    });
});


// Store values by pressing operator buttons
ops.forEach((op) => {
    op.addEventListener('click', () => {
        if (values.length > 0) {
            result();
        }

        values.push(op.innerText);
        values.push(parseFloat(display.innerText));
        display.innerText = '';

        checkDot();
    });
});


// Run operation by pressing '='
const btnEqual = document.getElementById('equal');

btnEqual.addEventListener('click', () => {
    if (values.length < 2) {
        values = []
    } else {
        result()
    }

    if (display.innerText.includes('.')) {
        dot.disabled = true;
    }
});


// Clear values by pressing 'AC'
const ac = document.getElementById('clear');

ac.addEventListener('click', () => {
    display.innerText = '';
    values = [];

    checkDot();
});


// Delete last digit by pressing 'DEL'
const del = document.getElementById('del');

del.addEventListener('click', () => {
    let newNum = display.innerText.slice(0, -1);
    display.innerText = newNum;

    checkDot();
});


// Disable "." if already pressed
const dot = document.getElementById('dot');

dot.addEventListener('click', () => {
    dot.disabled = true;
})


// "%" key functionality==========================================================================================
const cent = document.getElementById('cent');

cent.addEventListener('click', () => {
    if (isNaN(display.innerText)) {
        display.innerText = '';
        values = [];
    } else {
        let newNum = parseFloat(display.innerText) / 100;
        display.innerText = String(newNum);
        dot.disabled = true;
    }
})


// Keyboard support
document.addEventListener('keydown', (e) => {
    let keyName = e.key;

    switch(keyName) {
        case '+':
            defineOps('+')
            break;
        case '-':
            defineOps('-')
            break;
        case '*':
            defineOps('X')
            break;
        case '/':
            defineOps('/')
            break;
        case 'Enter':
            if (values.length < 2) {
                values = []
            } else {
                result()
            }
        
            if (display.innerText.includes('.')) {
                dot.disabled = true;
            }
            break;
        case 'Backspace':
            let newNum = display.innerText.slice(0, -1);
            display.innerText = newNum;

            checkDot();
            break;
        default:
            if(!isNaN(keyName)) {
                popDisplay(keyName);
            } else if (keyName == '.') {
                popDisplay(keyName);
                dot.disabled = true;
            }
            break;
    }
},);


// ========== Functions ==========

// Operations
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

function result() {
    values.push(parseFloat(display.innerText));

    let result = operate(values[0], values[1], values[2]);
    display.innerText = String(result.toFixed(2));

    values = [];
}

// Check if "." is on display
function checkDot() {
    if (dot.disabled && !display.innerText.includes('.')) {
        dot.disabled = false;
    }
}

// Populate display
function popDisplay(btnText) {
    if (isNaN(display.innerText)) {
        display.innerText = '';
        values = [];
    }

    display.innerText += btnText;
}

// Operators
function defineOps(op) {
    if (values.length > 0) {
        result();
    }

    values.push(op);
    values.push(parseFloat(display.innerText));
    display.innerText = '';

    checkDot();
}