var a = 4;
if (++a === 5) /* True */ {   
	// x = ++a => a = a + 1, x = a; a = 5, x = 5;
	// Pre Increment
	// Firstly increments a, then it will compare with 5.
	alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) /* False */ {
	// x = b++ => x = b, b = b + 1; x = 82, b = 83;
	// Post Increment
	// Firstly compare current value of b with 83, then increment b.
	alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) /* False */ {
	// x = c++ => x = c, c = c + 1; x = 12, c = 13;
	// Post Increment
	// Firstly compare current value of c with 13 and then increment c.
	alert("condition 1 is true");
}
if (c === 13) /* True */ {
	/* c = 13, c is updated in previous if statement. */
	alert("condition 2 is true");
}
if (++c < 14) /* False */ {
	// x = ++c => c = c + 1, x = c; c = 14, x = 14;
	// Pre Increment
	// Firstly increments c, then it will compare with 14.
	alert("condition 3 is true");
}
if(c === 14) /* True */ {
	/* c = 14, c is updated in previous if statement. */
	alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) /* True */ {
	// totalCost is equal to the sum of the materialCost and laborCost.
	alert("The cost equals");
}
if (true) {
	// Condition is true.
	alert("True");
}
if (false) {
	// Condition is false
	alert("False");
}
if("car" < "cat") /* True */ {
	// "car" and "cat" alphabets are converted to ASCII number system, then compare both words' each number of each character with each other.
	alert("car is smaller than cat");
}
