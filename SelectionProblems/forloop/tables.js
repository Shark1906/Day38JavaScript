const readline = require("readline-sync");

console.log("Enter a number");
let n = Number(readline.question());

for (let index = 1; index < n; index++) {
    console.log(2**index);
}