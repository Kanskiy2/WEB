// Task 1
function performCalculation(operation) {
    const num1 = parseFloat(document.getElementById("calcNum1").value);
    const num2 = parseFloat(document.getElementById("calcNum2").value);
    let result;

    if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }

    document.getElementById("calcResult").innerText = "Result: " + result;
}



function sumTriple(a, b) {
    return a === b ? 3 * (a + b) : a + b;
}

// Task 3
function calculateClosestTo100() {
    const num1 = parseInt(document.getElementById("closeNum1").value);
    const num2 = parseInt(document.getElementById("closeNum2").value);
    const result = near_100(num1, num2);
    document.getElementById("closestResult").innerText = "Result: " + result;
}

function near_100(x, y) {
    const diffX = Math.abs(100 - x);
    const diffY = Math.abs(100 - y);
    
    if (diffX < diffY) {
        return x;
    } else if (diffY < diffX) {
        return y;
    } else {
        return false; // Both are equally close
    }
}

// Task 4
function extractFirstHalf() {
    const str = document.getElementById("inputString").value;
    const result = first_half(str);
    document.getElementById("firstHalfResult").innerText = "Result: " + result;
}

function first_half(str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    } else {
        return "String length is not even.";
    }
}


// Task 5
function calculateSumTriple() {
    const num1 = parseInt(document.getElementById("sumNum1").value);
    const num2 = parseInt(document.getElementById("sumNum2").value);
    const result = sumTriple(num1, num2);
    document.getElementById("sumTripleResult").innerText = "Result: " + result;
}
