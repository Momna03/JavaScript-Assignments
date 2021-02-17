var date = new Date();

if(date.getDate() < 16) {
	document.write("<h2>First fifteen days of the month</h2>");
}
else {
	document.write("<h2>Last days of the month</h2>");
}