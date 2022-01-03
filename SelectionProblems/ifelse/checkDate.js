const readline = require("readline-sync");

console.log("Enter the day");
let day = Number(readline.question());

console.log("Enter the month");
let month = Number(readline.question());
let isTrue=false;
if((month == 3 && day >= 20 && day <= 31) | (month == 4 && day > 0 && day <= 30) | (month == 5 && day > 0 && day <= 31) | (month == 6 && day > 0 && day <= 20)){
    isTrue = true
}

console.log(isTrue);