var colors = ["Red", "Orange", "Purple", "Yellow", "Green"];
var lastElement = colors.length - 1;

// Display colors
document.write("<p>");
for(var i=0; i<colors.length; i++) {
	
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

// Adding a color in the start of the array.
var startColor = prompt("What color you want to add in the beginning?");

colors.unshift(startColor);
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

// console.log(colors);

var endColor = prompt("What color you want to add at the end?");
colors.push(endColor);
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

colors.unshift("Blue", "Pink");
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

//Deleting first color from the array
colors.shift();
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

//Deleting last color from the array
colors.pop();
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

//Adding a color at any index.
// colors(index, remove element count, single or multiple values);
// colors.splice(index, remove element count);
var index = prompt("Enter an index to add a new color: ");
var colorName = prompt("Enter name of color: ");
colors.splice(index, 0, colorName);   // remove no elements
// console.log(colors);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
		document.write(colors[i] + ", ");
	}
}
document.write("</p>");

index = prompt("Enter an index to remove elements: ");
var removingColorCount = prompt("How many colors you want to delete?");
colors.splice(index, removingColorCount);

// Display colors
lastElement = colors.length - 1;

document.write("<p>");
for(var i=0; i<colors.length; i++) {
	if(i === lastElement) {
		document.write(colors[i]);
	}
	else {
	document.write(colors[i] + ", ");
	}
}
document.write("</p>");

