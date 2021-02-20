var date = new Date();
var age = prompt("what is your age?");
date.setFullYear(date.getFullYear() - age);
document.write("<p>Your age is " + age + "</p>");
document.write("<p>Your birth Year is " + date.getFullYear() + "</p>");