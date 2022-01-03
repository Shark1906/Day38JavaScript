const readline = require("readline-sync");

console.log("Enter the first number");
let first = Number(readline.question());

console.log("Enter the last number");
let last = Number(readline.question());

var count = 0;
for (let i = first; i <= last; i++) {
    for (let j = 1; j <= i; j++) {
        if (i%j == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(i + " is a Prime Number");
    }
    count = 0;
}