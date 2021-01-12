var A = [24, 53, 78, 91, 12];

max = 0;
for (var i=0; i<A.length; i++) {
	if(max < A[i]) {
		max = A[i];
	}
}

document.write("<p>Array items: " + A + "</p>");
document.write("<p>The largest number is " + max + "</p>");
