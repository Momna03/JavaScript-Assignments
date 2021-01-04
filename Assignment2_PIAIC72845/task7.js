var firstInputNumber = prompt("Enter first number: ");
var secondInputNumber = prompt("Enter second number: ");
var operation = prompt("Enter an operation from +, -, *, /, % ");
var result = 0;
firstNumber = Number(firstInputNumber);
secondNumber = Number(secondInputNumber);

if(operation === "+") {
	result = firstNumber + secondNumber;
}
else if(operation === "-") {
	result = firstNumber - secondNumber;
}
else if(operation === "*") {
	result = firstNumber * secondNumber;
}
else if(operation === "/") {
	result = firstNumber / secondNumber;
}
else if(operation === "%") {
	result = firstNumber % secondNumber;
}
else {
	alert("Wrong Input");
}
alert("Result = " + result);
