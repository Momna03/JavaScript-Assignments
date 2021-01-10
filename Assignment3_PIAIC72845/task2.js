var names = ["Michael", "John", "Tony"];
var marks = [];
marks[names[0]] = 320;
marks[names[1]] = 230;
marks[names[2]] = 480;
var totalMarks = 500;

for (var i=0; i<names.length; i++) {
	
	var percentage = (marks[names[i]] * 100) / totalMarks;
	document.write("<p> Score of " + names[i] + " is " + marks[names[i]] + ". Percentage: " + percentage + "%" +"</p>");
}
