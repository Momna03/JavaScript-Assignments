var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var flag = false;

for (var i=0; i<A.length; i++) {
	if(searchItem === A[i]) {
		flag = true;
	}
}

if(flag === true) {
	document.write("<p>" + A[i] + " is <b>available</b> at index " + i + " in our bakery</p>");
}
else {
	document.write("We are sorry. " + A[i] + " <b>is not available</b> in our bakery");
}
