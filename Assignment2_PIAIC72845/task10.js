var correctPassword = "javaScript";
var password = prompt("Enter password: ");

if(password === "") {
	alert("Please enter your password");
}
else {	
	if(password === correctPassword) {
	alert("Correct! The password you entered matches the original password.");
	}
	else {
		alert("Incorrect password");
	}
}
