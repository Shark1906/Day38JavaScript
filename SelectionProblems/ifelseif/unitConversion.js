const readline = require("readline-sync");

console.log("Enter value of 'a'");
let a = Number(readline.question());

console.log("Enter value of 'b'");
let b = Number(readline.question());

console.log("Enter value of 'c'");
let c = Number(readline.question());

let first = a + (b * c);
let second = (a % b) +c;
let third = c + (a / b);
let fourth = (a * b) + c;

if(first > second && first > third && first > fourth){
    console.log("Maximum => (a+b*c) => ("+a+"+"+b+"*"+c+") = " + first);
}else if(second > first && second > third && second > fourth){
    console.log("Maximum => (a%b+c) => ("+a+"%"+b+"+"+c+") = " + second);
}else if(third > first && third > second && third > fourth){
    console.log("Maximum => (c+a/b) => ("+c+"+"+a+"/"+b+") = " + third);
}else if(fourth > first && fourth > second && fourth > third){
    console.log("Maximum => (a*b+c) => ("+a+"*"+b+"+"+c+") = " + fourth);
}

if(first < second && first < third && first < fourth){
    console.log("Minimum => (a+b*c) => ("+a+"+"+b+"*"+c+") = " + first);
}else if(second < first && second < third && second < fourth){
    console.log("Minimum => (a%b+c) => ("+a+"%"+b+"+"+c+") = " + second);
}else if(third < first && third < second && third < fourth){
    console.log("Minimum => (c+a/b) => ("+c+"+"+a+"/"+b+") = " + third);
}else if(fourth < first && fourth < second && fourth < third){
    console.log("Minimum => (a*b+c) => ("+a+"*"+b+"+"+c+") = " + fourth);
}