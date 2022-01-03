const readline = require("readline-sync");
do{
console.log("Enter\n1. Celcius to Farenhiet\n2. Farenhiet to Celcius\n3. Exit");
var input = Number(readline.question());

switch (input) {
    case 1:
        console.log("Enter the temperature in Celcius ");
        let celcius = Number(readline.question());
        toDegF(celcius)
        break;
    
    case 2:
        console.log("Enter the temperature in Farenhiet ");
        let farenhiet = Number(readline.question());
        toDegC(farenhiet)
        break;
        
    default:
        console.log("Enter a valid Input");
        break;
}
}while (input != 3)

function toDegF(celcius) {
    console.log(celcius + "degC = " + ((celcius * 9/5)+32) + "degF");
}

function toDegC(farenhiet) {
    console.log(farenhiet + "degF = " + ((farenhiet - 32) * 5/9) + "degC");
}