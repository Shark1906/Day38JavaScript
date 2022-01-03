const readline = require("readline-sync");

number=[];
var sum=0;
for (let i = 0; i < 5; i++) {
    console.log("Enter "+ (i+1)+" Number");
    number.push(Number(readline.question()));
    sum=sum+number[i];
}
console.log("Sum of numbers : "+ sum + " & Avg of numbers : "+(sum/5));