var number = prompt("Enter a number");
var decimalPlaces = prompt("Enter no. of decimal places");

document.write( Number(number).toFixed( Number(decimalPlaces) ) );