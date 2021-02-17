var counting = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
"Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var countingTens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var countingGreaterThanTens = ["", "Hundred", "Thousand"];

var inputNumber = prompt("Enter a number");

var words = "";
var length = inputNumber.length;

if(length == 1) {
	words = counting[Number(inputNumber[0])];
}
else if(length == 2) {
	if(Number(inputNumber[0]) === 1) {
		number = inputNumber[0] + inputNumber[1];
		words = counting[Number(number)];
	}
	else if(Number(inputNumber[0]) > 1) {
		if(Number(inputNumber[1]) === 0) {
			words = countingTens[Number(inputNumber[0])];
		}
		else {
			words = countingTens[Number(inputNumber[0])] + " " +counting[Number(inputNumber[1])];
		}
	}
}
else if(length == 3) {
	
	if(Number(inputNumber[1]) === 0 && Number(inputNumber[2]) === 0) {
		words = counting[Number(inputNumber[0])] + " " + countingGreaterThanTens[1];
	}
	else if(Number(inputNumber[1]) === 1) {
		var value = inputNumber[1] + inputNumber[2];
		words = counting[Number(inputNumber[0])] + " " + countingGreaterThanTens[1] + " and " + counting[Number(value)];
	}
	else if(Number(inputNumber[2]) === 0) {
		words = counting[Number(inputNumber[0])] + " " + countingGreaterThanTens[1] + " and " + countingTens[Number(inputNumber[1])];
	}
	else {
		words = counting[Number(inputNumber[0])] + " " + countingGreaterThanTens[1] + " and " + countingTens[Number(inputNumber[1])] + " " 
		+ counting[Number(inputNumber[2])];
	}
}

document.write(words);



/*for (var i=inputNumber.length -1; i>=0; i--) {
	document.write("<p>i: " + i + ": " + inputNumber[i] + "</p>");
	if(i == inputNumber.length)
	words = counting[inputNumber[i] + 1];
	words = words;
}*/