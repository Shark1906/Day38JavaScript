const readline = require("readline-sync");

console.log("Enter a Number");
let num = Number(readline.question());

if(num.toString().length == 1){
    console.log("unit");
}else if(num.toString().length == 2){
    console.log("tens");
}else if(num.toString().length == 3){
    console.log("hundred");
}else if(num.toString().length == 4){
    console.log("thousand");
}else if(num.toString().length == 5){
    console.log("ten thousand");
}else if(num.toString().length == 6){
    console.log("hundred thousand");
}else if(num.toString().length == 7){
    console.log("million");
}else{
    console.log("Enter number from 1-digit to 7-digit only");
}