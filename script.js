const add = function(a,b) {
    console.log(a + b);
    return a + b;
}
const subtract = function(a,b) {
    return a - b;
}
const multiply = function(a,b) {
    return a * b;
}
const divide = function(a,b) {
    if(b == 0){
        return "ERR0R";
    }
    return a / b;
}
const operate = function(operation, a, b) {
    if(operation == "+") {
        return add(a, b);
    } else if(operation == "-") {
        return subtract(a, b);
    } else if(operation == "*") {
        return multiply(a, b);
    } else if(operation == "/") {
        return divide(a, b);
    }
}

const display = document.querySelector("#displayDiv");
let displayValue = "";
let tempNum = "";
let numA = "";
let numB = "";
let operator = "";
let result = "";

const buttons = document.querySelectorAll("button");
const calcDiv = document.querySelector("#calcDiv");
const resultsDiv = document.querySelector("#resultsDiv");

buttons.forEach((button) => {
    const displayDigit = function() {
        tempNum = tempNum + button.value;
        resultsDiv.textContent = tempNum;
    }
    const displayPoint = function() {
        if(!(tempNum.includes("."))){
            tempNum = tempNum + ".";
        }
    }
    const displayClear = function() {
        tempNum = "";
        numA = "";
        numB = "";
        operator = "";
        calcDiv.textContent = "ㅤ";
        resultsDiv.textContent = "0";
    }
    const displayDelete = function() {
        tempNum = tempNum.slice(0, -1);
        resultsDiv.textContent = tempNum;
    }
    const displayOperator = function() {
        if((calcDiv.textContent.includes("+") || calcDiv.textContent.includes("-") || calcDiv.textContent.includes("*") || calcDiv.textContent.includes("/")) && !(calcDiv.textContent.includes("="))) {
            numB = tempNum;
            tempNum = "";
            result = operate(operator, Number(numA), Number(numB));
            operator = button.value;
            numA = result;
            calcDiv.textContent = numA + button.value;
        } 
        else if (calcDiv.textContent.includes("=")){
            numB = tempNum;
            tempNum = "";
            console.log(numA + operator + numB)
            operator = button.value;
            numA = result;
            calcDiv.textContent = numA + button.value;
        }
        else {
            numA = tempNum;
            tempNum = "";
            calcDiv.textContent = numA + button.value;
            operator = button.value;
        
    }}

    button.onclick = function() {
        if(button.className == "digit"){
            if (tempNum <= 99999999999999) {
            displayDigit();}
            else {
                alert ("ERR0R")
            }
        };
        if(button.id == "point"){
            displayPoint();};
        if(button.id == "clear"){
            displayClear();};
        if(button.id == "delete"){
            displayDelete();};
        if(button.className == "operator"){
            displayOperator();};

        if(button.id == "equal"){
            numB = tempNum;
            tempNum = "";
            calcDiv.textContent = numA + operator + numB + "=";
            result = operate(operator, Number(numA), Number(numB));
            resultsDiv.textContent = result;
            numA = result;
        }
    }

    document.onkeydown = function(e){
        if(e.key >= 0 && e.key <= 9){
            if (tempNum <= 99999999999999) {
                tempNum = tempNum + e.key;
                resultsDiv.textContent = tempNum;}
                else {
                    alert ("ERR0R")}
        } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/"){
            if((calcDiv.textContent.includes("+") || calcDiv.textContent.includes("-") || calcDiv.textContent.includes("*") || calcDiv.textContent.includes("/")) && !(calcDiv.textContent.includes("="))) {
                numB = tempNum;
                tempNum = "";
                result = operate(operator, Number(numA), Number(numB));
                operator = e.key;
                numA = result;
                calcDiv.textContent = numA + e.key;
            } 
            else if (calcDiv.textContent.includes("=")){
                numB = tempNum;
                tempNum = "";
                console.log(numA + operator + numB)
                operator = e.key;
                numA = result;
                calcDiv.textContent = numA + e.key;
            }
            else {
                numA = tempNum;
                tempNum = "";
                calcDiv.textContent = numA + e.key;
                operator = e.key;
            }
        } else if(e.key == "Escape" || e.key == "Delete") {
            displayClear()
        } else if(e.key == "Backspace") {
            displayDelete()
        } else if(e.key == "=" || e.key == "Enter") {
            numB = tempNum;
            tempNum = "";
            calcDiv.textContent = numA + operator + numB + "=";
            result = operate(operator, Number(numA), Number(numB));
            resultsDiv.textContent = result;
            numA = result;
        }
    } //fine keydown
    
})



