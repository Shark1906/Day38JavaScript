const readline = require("readline-sync");
var feet, inch, meter;
do{
console.log("Enter\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n5. Exit");
var num = Number(readline.question());

switch (num) {
    case 1:
        console.log("Enter the Feet to convert into Inch");
        feet = Number(readline.question());
        console.log(feet+"Ft = "+feet*12+"In");
        break;
    
    case 2:
        console.log("Enter the Feet to convert into Meter");
        feet = Number(readline.question());
        console.log(feet+"Ft = "+feet*0.3048+"Mtr");
        break;

    case 3:
        console.log("Enter the Inch to convert into Feet");
        inch = Number(readline.question());
        console.log(inch + "In = " + Math.floor(inch/12) + "Ft " + inch%12 + "In");
        break;
    
    case 4:
        console.log("Enter the Meter to convert into Feet");
        meter = Number(readline.question());
        console.log(meter+"Mtr = "+meter*3.28084+"Ft");
        break;    

    default:
        break;
}
}while (num != 5)