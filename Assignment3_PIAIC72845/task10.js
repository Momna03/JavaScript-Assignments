var A = [20, 53, 78, 4, 91, 12];

for (var i = 0; i < A.length-1; i++) {
    for (var j = 0; j < A.length-i-1; j++) {
        if (A[j] > A[j+1]) {
			var temp = A[j];
			A[j] = A[j+1];
			A[j+1] = temp;
		}
	}
}  

document.write("A = [" + A + "]");
