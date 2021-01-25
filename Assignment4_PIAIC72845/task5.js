var number = prompt("Enter a poitive number: ");

document.write("<p>number: " + number + "</p>");

var roundValue = Math.round(number);
document.write("<p>round of value: " + roundValue + "</p>");

var floorValue = Math.floor(number);
document.write("<p>floor value: " + floorValue + "</p>");

var ceilingValue = Math.ceil(number);
document.write("<p>ceil value: " + ceilingValue + "</p>");
