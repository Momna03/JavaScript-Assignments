var date = new Date();
document.write("<p>Current date: " + date + "</p>");
date.setHours(date.getHours() -1);
document.write("<p>1 hour ago, it was " + date + "</p>");