const readline = require("readline-sync");

console.log("Enter the first Number");
let num = Number(readline.question());
isPallindrome(num);

console.log("Enter the second Number");
num = Number(readline.question());
isPallindrome(num);

function isPallindrome(num) {
    let sum = 0;
    let temp = num;
    
    while (num > 0) {
        let rem = (num%10);
        sum = ((sum*10)+rem);
        num = Math.floor(num/10);
    }

    if(temp == sum){
        console.log(temp + " is a Pallindrome Number ");
    }else{
        console.log(temp + " is not a Pallindrome Number");
    }
}