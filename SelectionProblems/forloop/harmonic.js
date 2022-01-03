const readline = require("readline-sync");

console.log("Enter a number");
let n = Number(readline.question());

var har_num=0;
for (let index = 1; index <= n; index++) {
    let formula = 1/index;
    har_num = har_num + formula
}
console.log(har_num);