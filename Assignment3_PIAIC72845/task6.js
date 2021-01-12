var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
var count = 0;

for (var i=0; i<aCities.length-1; i++) {
	count++;
	document.write("<p>" + count + o[i+1]+ " choice is " + aCities[i] + "<p>");
}