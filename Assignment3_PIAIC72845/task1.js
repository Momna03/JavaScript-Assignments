var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
var listCount = 1;

document.write("<h1>Qualifications</h1>");

document.write('<ol style="list-style-type: none">');

for (var i=0; i<qualifications.length; i++) {
	document.write("<li style='font-size: 20px; font-weight: bold;'>" + listCount + ") " + qualifications[i] + "</li>");
	listCount++;
}

document.write("</ol>");

