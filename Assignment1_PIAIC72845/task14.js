var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// w = --a; => a = a - 1; w = a; => a = 1, w = 1
// x = --b; => b = b - 1; x = b; => b = 0, x = 0
// y = ++b; => b = b + 1; y = b; => b = 1, y = 1
// z = b--; => z = b; b = b - 1; => z = 1, b = 0

// --a; => 1
// --a - --b; => 1 - 0
// --a - --b + ++b; => 1 - 0 + 1
// --a - --b + ++b + b--; => 1 - 0 + 1 + 1 = 3

document.write("<p>a is " + a + "</p>");
document.write("<p>b is " + b + "</p>");
document.write("<p>result is " + result + "</p>");