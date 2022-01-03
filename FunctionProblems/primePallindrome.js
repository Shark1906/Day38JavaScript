const readline = require("readline-sync");
console.log("Enter a number");
let num = Number(readline.question());
if(isPrime(num) == true){
    isPrime(getPallindrome(num))
}
function getPallindrome(num) {
    let sum = 0;
    let temp = num;
    
    while (num > 0) {
        let rem = (num%10);
        sum = ((sum*10)+rem);
        num = Math.floor(num/10);
    }
    return sum;
}
function isPrime(num) {
    var count = 0;
    for (let index = 1; index <= num; index++) {
        if(num % index == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(num + " is a Prime Number");
        return true
    }else{
        console.log(num + " is not a Prime Number");
        return false
    }
}