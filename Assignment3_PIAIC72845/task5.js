// Removing Duplicate Items in an array

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

for (var i=0; i<arr1.length; i++) {
	for(var j=0; j<i; j++) {
		if (arr1[i] === arr1[j]) {
			arr1.splice(i, 1);
			i--;
		}
	}
}

document.write("arr1 = " + arr1 + "<br />");
