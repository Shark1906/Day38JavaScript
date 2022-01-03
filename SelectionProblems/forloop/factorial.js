const readline = require("readline-sync");

console.log("Enter a number");
let num = Number(readline.question());

var count = 1;
for (let i = 1; i <= num; i++) {
    count = i * count;
}

console.log("Factorial of " + num + " = " +count);