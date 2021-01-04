var secretNumber = 4;
var guessedNumber = prompt("Guess Game \r\nEnter a number: ");

if(Number(guessedNumber) === secretNumber) {
	alert("Guess Game \r\nBingo! Correct answer");
}
else if(Number(guessedNumber)+ 1 === secretNumber) {
	alert("Guess Game \r\nClose enough to the correct answer");
}
