const readline = require("readline-sync");

console.log("Enter a number");
let n = Number(readline.question());
var last_power = 8;
var count = 0;

while (count<= last_power && count <= n) {
    console.log(2**count);
    count++;
}
    
