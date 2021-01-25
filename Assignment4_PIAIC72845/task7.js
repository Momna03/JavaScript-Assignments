var str = "The quick brown fox jumps over the lazy dog";

var count = 0;
count = (str.match(/the/gi) || []).length;
document.write("<p>" + count + "</p>");

