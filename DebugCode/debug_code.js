
function performOperation(operationType) {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result;
        switch (operationType){
        case "Multiply":
            result = multiply(num1, num2);
            break;
        case "Divide":
            result = divide(num1, num2);
            break;
        case "Add":
            result = addition(num1, num2);
            break;
        case "Subtract":
            result = subtraction(num1, num2);
            break;
        }
        // Display the result
        displayResult(result, operationType);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide a with b 
    return a / b;
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add a and b 
    return a + b;
}

function subtraction(a,b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // subtract b from a
    return a - b;
}

function displayResult(result, operation) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The ${operation} result is: ${result}`;
}
    