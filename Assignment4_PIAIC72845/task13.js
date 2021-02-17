var currentDate = new Date();
var Todaymilli = currentDate.getTime();
var todayMin = currentDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);

document.write("<p>Current Date: " + currentDate + "</p>");
document.write("<p> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli + "</p>");
document.write("<p> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin + "</p>")