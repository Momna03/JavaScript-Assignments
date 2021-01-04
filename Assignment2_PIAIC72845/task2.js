var trafficSignalColor = prompt("Enter color of road traffic signal: ");

if(trafficSignalColor === "Red" || trafficSignalColor === "red") {
	document.write("<p>Must stop</p>");
}
else if(trafficSignalColor === "Yellow" || trafficSignalColor === "yellow") {
	document.write("<p>Ready to move</p>");
}
else if(trafficSignalColor === "Green" || trafficSignalColor === "green") {
	document.write("<p>Move now</p>");
}
