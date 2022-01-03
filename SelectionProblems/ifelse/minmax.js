const readline = require("readline-sync");

const positons = ["First", "Second", "Third","Fourth", "Fifth"];

number=[];
for (let i = 0; i < 5; i++) {
    console.log("Enter " + (positons[i]) + " 3-digit Number");
    number.push(Number(readline.question()));
}

let max = 0;
for (let index = 0; index < number.length; index++) {
    
    if(number[index] > max){
    max = number[index]
    }
}

let min = number[0];
for (let index = 0; index < number.length; index++) {
    
    if(number[index] < min){
        min = number[index]
    }
}
console.log("Maximum Number : " + max);
console.log("Minimum Number : " + min);