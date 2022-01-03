const readline = require("readline-sync");

console.log("Enter a Number from 1 to 7");
let num = Number(readline.question());

switch (num.toString().length) {
    case 1:
        console.log("Unit");
        break;
    
    case 2:
        console.log("Tens");
        break;

    case 3:
        console.log("Hundred");
        break;
    
    case 4:
        console.log("Thousand");
        break;

    case 5:
        console.log("Ten Thousand");
        break;

    case 6:
        console.log("Hundred Thousand");
        break;

    case 7:
        console.log("Million");
        break;
        
    default:
        console.log("Enter a Number from 1 to 7 digit");
        break;
}