cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
selectedCities = [];

document.write("<h4>Cities List: </h4>");
document.write("<p>" + cities + "</p>");

// slice(startIndex, endIndex);
selectedCities = cities.slice(2, 4);
document.write("<h4> Selected Cities List: </h4>");
document.write("<p>" + selectedCities + "</p>");
