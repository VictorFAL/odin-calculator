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
        case '*':
            return mult(num1, num2);
            break;
        case '/':
            return div(num1, num2);
            break;
    }
}

const display = document.getElementById('display');
const btns = document.querySelectorAll('.nums');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.innerText += btn.innerText;
    });
});


// const calc = document.getElementById('calculator');

// calc.addEventListener('click', (btn) => {
//     if (btn.target && btn.target.matches('button.nums')) {
//         console.log(btn.innerText);
//     }
// });