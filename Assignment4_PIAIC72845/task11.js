var digits = prompt("Enter a number");
var mean = 0;
var sum = 0;

for (var i=0; i<digits.length; i++) {
	sum = sum + Number(digits[i]);
}
mean = sum/digits.length;
document.write("<p> Mean: " + mean + "</p>");