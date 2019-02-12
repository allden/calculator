let expression = '';
let expressionTwo = '';
// while this is true update expression, if it's false update expressionTwo
let flag = true;
// depending on which operator we press, one of these will be active.
// we use them so that getResult knows what operator to use
var addMode = false;
var subMode = false;
var mulMode = false;
var divMode = false;
// after getResult() is used, 
// this is true and we can't add a new value to expressionTwo so the user is forced to click an operator
let lock = false;
// boxes
let result = document.querySelector('.result');

// numbers
let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

// misc
let reset = document.querySelector('.reset');
let back = document.querySelector('.back');
let decimal = document.querySelector('.decimal');

// operators
let plus = document.querySelector('.plus');
let equal = document.querySelector('.equal');
let multiply = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let subtraction = document.querySelector('.minus');

// buttons
one.addEventListener('click', function() {
    if(flag) {
        updateResult(one);
    } else if(lock === false) {
        updateResultTwo(one);
    }
});

two.addEventListener('click', function() {
    if(flag) {
        updateResult(two);
    } else if(lock === false) {
        updateResultTwo(two);
    }
});

three.addEventListener('click', function() {
    if(flag) {
        updateResult(three);
    } else if(lock === false) {
        updateResultTwo(three);
    }
});

four.addEventListener('click', function() {
    if(flag) {
        updateResult(four);
    } else if(lock === false) {
        updateResultTwo(four);
    }
});

five.addEventListener('click', function() {
    if(flag) {
        updateResult(five);
    } else if(lock === false) {
        updateResultTwo(five);
    }
});

six.addEventListener('click', function() {
    if(flag) {
        updateResult(six);
    } else if(lock === false) {
        updateResultTwo(six);
    }
});

seven.addEventListener('click', function() {
    if(flag) {
        updateResult(seven);
    } else if(lock === false) {
        updateResultTwo(seven);
    }
});

eight.addEventListener('click', function() {
    if(flag) {
        updateResult(eight);
    } else if(lock === false) {
        updateResultTwo(eight);
    }
});

nine.addEventListener('click', function() {
    if(flag) {
        updateResult(nine);
    } else if(lock === false) {
        updateResultTwo(nine);
    }
});

zero.addEventListener('click', function() {
    if(flag) {
        updateResult(zero);
    } else if(lock === false) {
        updateResultTwo(zero);
    }
});

back.addEventListener('click', getBack);
reset.addEventListener('click', getReset);
plus.addEventListener('click', getAddition);
equal.addEventListener('click', getResult);
multiply.addEventListener('click', getMultiplication);
division.addEventListener('click', getDivision);
subtraction.addEventListener('click', getSub);
decimal.addEventListener('click', addDecimal);
// functions
function getReset() {
    expression = '';
    expressionTwo = '';
    result.textContent = '';
    flag = true;
    addMode = false;
    subMode = false;
    mulMode = false;
    divMode = false;
}

function updateResult(num) {
    expression += getTextContent(num);
    result.textContent += getTextContent(num);
}

function updateResultTwo(num) {
    expressionTwo += getTextContent(num);
    result.textContent += getTextContent(num);
}

function getTextContent(element) {
    return element.textContent;
}

function getBack() {
    if(flag) {
        expression = expression.slice(0, -1);
        result.textContent = expression;
    } else if(lock === false) {
        expressionTwo = expressionTwo.slice(0, -1);
        result.textContent = expressionTwo;
    }
}

function getResult() {
    lock = true;
    if(addMode) {
        addMode = false;
        expression = +expression + +expressionTwo;
        expressionTwo = '';
        result.textContent = expression;
    } else if(subMode) {
        subMode = false;
        expression = +expression - +expressionTwo;
        expressionTwo = '';
        result.textContent = expression;
    } else if(mulMode) {
        mulMode = false;
        expression = +expression * +expressionTwo;
        expressionTwo = '';
        result.textContent = expression;
    } else if(divMode) {
        divMode = false;
        if(expressionTwo == 0) {
            result.textContent = '(╯°□°）╯︵ ┻━┻';
        } else {
            expression = +expression / +expressionTwo;
            result.textContent = expression;
        }
        expressionTwo = '';
    }
}

function addDecimal() {
    if(flag && expression && expression.includes('.') === false) {
        expression += '.';
        result.textContent += '.';
    } else if(lock === false && expressionTwo && expressionTwo.includes('.') === false) {
        expressionTwo += '.';
        result.textContent += '.';
    }
}
// four modes
function getAddition() {
    addMode = true;
    subMode = false;
    mulMode = false;
    divMode = false;
    flag = false;
    lock = false;
    result.textContent = '';
}

function getMultiplication() {
    mulMode = true;
    subMode = false;
    addMode = false;
    divMode = false;
    flag = false;
    lock = false;
    result.textContent = '';
}

function getDivision() {
    mulMode = false;
    subMode = false;
    addMode = false;
    divMode = true;
    flag = false;
    lock = false;
    result.textContent = '';
}

function getSub() {
    mulMode = false;
    subMode = true;
    addMode = false;
    divMode = true;
    flag = false;
    lock = false;
    result.textContent = '';
}
