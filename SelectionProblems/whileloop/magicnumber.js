const readline = require("readline-sync");

console.log("Enter a number");
let n = Number(readline.question());
let assumption = 0;
while(assumption < n){
    assumption = assumption + n/2;    
    console.log(assumption);
    if(assumption == n){
        console.log("Magic number Reached");
    }
}

