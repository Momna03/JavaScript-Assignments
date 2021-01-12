var counting = [];

var i = 0;
document.write("<p>Counting: ");
for (var count=1; count<=15; count++) {
	counting[i] = count;
	if(count < 15)
		document.write(counting[i] + ", ");
	else
		document.write(counting[i]);
	i++;
}
document.write("</p>");


var reverseCounting = [];

i = 0;
document.write("<p>Reverse counting: ");
for(var count=10; count>=1; count--) {
	reverseCounting[i] = count;
	if(count>1)
		document.write(reverseCounting[i] + ", ");
	else
		document.write(reverseCounting[i]);
	i++;
}
document.write("</p>");


var even = [];

i = 0;
document.write("<p>Even: ");
for(var count=0; count<=20; count++) {
	if(count%2 === 0) {
		even[i] = count;
		if(count<20)
			document.write(even[i] + ", ");
		else
			document.write(even[i]);
	}
	i++;
}
document.write("</p>");


var odd = [];

i = 0;
document.write("<p>Even: ");
for(var count=0; count<=20; count++) {
	if(count%2 !== 0) {
		odd[i] = count;
		if(count<19)
			document.write(odd[i] + ", ");
		else
			document.write(odd[i]);
	}
	i++;
}
document.write("</p>");


var series = [];

i = 0;
document.write("<p>Series: ");
for(var count=2; count<=20; count+=2) {
	series[i] = count;
		if(count<20)
			document.write(series[i] + "k, ");
		else
			document.write(series[i] + "k");
	i++;
}
document.write("</p>");
