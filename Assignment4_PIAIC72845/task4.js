var email = prompt("Enter Email ID");

if(/@/.test(email)) {
	
	if( /[a-z]|[0-9]/i.test(email[0]) ) {
		
		var index = email.search('@');
		index = index+1;
		var dot = "\\."
		if(/\.[a-z]/.test(email) ) {
			document.write("<p style='color: green'>Email is correct</p>");
		}
		else {
			document.write("<p style='color: red'>Email is not correct</p>");
		}
		
	}
	else {
		document.write("<p style='color: red'>Email is not correct</p>");
	}
}
else {
	document.write("<p style='color: red'>Email is not correct</p>");
}
