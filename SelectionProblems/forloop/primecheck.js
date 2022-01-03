const readline = require("readline-sync");

console.log("Enter a number");
let num = Number(readline.question());
var count = 0;
for (let index = 1; index <= num; index++) {
    if(num % index == 0){
        count++;
    }
    
}

if(count == 2){
    console.log(num + " is a Prime Number");
}else
    console.log(num + " is not a Prime Number");