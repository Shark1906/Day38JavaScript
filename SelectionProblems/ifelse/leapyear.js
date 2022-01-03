const readline = require("readline-sync");

console.log("Enter the year");
let year = Number(readline.question());

if(year.toString().length == 4 && year%4==0){
    console.log(year + " is a Leap Year");
}else{
    console.log(year + " is not a Leap Year");
}