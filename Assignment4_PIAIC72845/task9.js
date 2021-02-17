str = "<p><strong><em>Only print this</em></strong></p>";
pattern = /(<([^>]+)>)/ig;
str = str.replace(pattern, '');
document.write("<h4>Output: </h4>");
document.write(str);
