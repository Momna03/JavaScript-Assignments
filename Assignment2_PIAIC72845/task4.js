var firstSubjectMarks = prompt("Enter marks in first subject: ");
var secondSubjectMarks = prompt("Enter marks in second subject: ");
var thirdSubjectMarks = prompt("Enter marks in third subject: ");
var totalMarks = prompt("Enter total marks: ");

var marksObtained = Number(firstSubjectMarks) + Number(secondSubjectMarks) + Number(thirdSubjectMarks);
var percentage = ( marksObtained *100 ) / totalMarks;
var grade = "";
var remarks = "";

if(percentage >= 80) {
	grade = "A-one";
	remarks = "Excellent";
}
else if(percentage >= 70) {
	grade = "A";
	remarks = "Good";
}
else if(percentage >= 60) {
	grade = "B";
	remarks = "You need to improve";
}
else if(percentage < 60) {
	grade = "Fail";
	remarks = "Sorry";
}

document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");
