var firstVariableNamingRule = "numbers";
var secondVariableNamingRule = "$";
var thirdVariableNamingRule = "_";
var fourthVariableNamingRule = "letter";
var fifthVariableNamingRule = "$";
var sixthVariableNamingRule = "_";
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain " + firstVariableNamingRule + ", " + secondVariableNamingRule + " and " 
	+ thirdVariableNamingRule + ". For example : $my_1stVariable</p>");
document.write("<p>Variables must begin with a " + fourthVariableNamingRule + ", " + fifthVariableNamingRule + " or " + 
	sixthVariableNamingRule + " . For example : $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");