var result = true;
var password = prompt("Enter password");
do {

	

	if( /([a-z]|[0-9])/gi.test(password) ) {
		if( /[0-9]/.test(password[0]) ) {
			// Password is not correct.
			result = true;
			var password = prompt("Enter valid password");
		}
		else {
			if(password.length >= 8) {
				// Password is correct.
				document.write("<p style='color: lightgreen'>Password is correct!</p>");
				result = false;
			}
			else {
				// Password is not correct.
				result = true;
				var password = prompt("Enter valid password");
			}
		}
	}
	else {
		// Password is not correct.
		result = true;
		var password = prompt("Enter valid password");
	}
	
	
} while(result === true);
