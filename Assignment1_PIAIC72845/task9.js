var firstNumber = prompt("Enter a number: ");
var secondNumber = prompt("Again enter a number: ");

var subtraction = Number(firstNumber) - Number(secondNumber);
document.write("<p>Subtraction of "+ firstNumber + " and " + secondNumber +" is " + subtraction + "</p>");

var multiplication = Number(firstNumber) * Number(secondNumber);
document.write("<p>Multiplication of "+ firstNumber + " and " + secondNumber +" is " + multiplication + "</p>");

var division = Number(firstNumber) / Number(secondNumber);
document.write("<p>Division of "+ firstNumber + " with " + secondNumber +" is " + division + "</p>");

var modulus = Number(firstNumber) % Number(secondNumber);
document.write("<p>Modulus of "+ firstNumber + " and " + secondNumber +" is " + modulus + "</p>");