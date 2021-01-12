var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]
c = [];

// Add values in c array.
var i = 0;;
var j = 0;

while(j < b.length) {
	c[i] = b[j];
	i++;
	j++;
}
j = 0;
while(j < a.length) {
	c[i] = a[j];
	i++;
	j++;
}

// Remove duplicate items from c array.

for (var i=0; i<c.length; i++) {
	for(var j=0; j<i; j++) {
		if (c[i] === c[j]) {
			c.splice(i, 1);
			i--;
		}
	}
}

document.write("<p>[" + c + "]</p>");
