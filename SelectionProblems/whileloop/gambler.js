let sum = 100;
let win = 0;
let loss = 0;
let bet = 0;

while (sum < 200 && sum > 0) {
    if (Math.floor(Math.random()*2) == 0) {
        win++;
        sum++;
        bet++;
    }else{
        loss++;
        sum--;
        bet++;
    }
    
}
console.log("Sum = " + sum + ", Wins = " + win + ", Losses = " + loss + ", No. of bets = " + bet);