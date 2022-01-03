var head = 0;
var tail = 0;
var num_of_flip = 11;


while(head < num_of_flip && tail < num_of_flip){
    if(Math.floor(Math.random()*2) == 0){
        head++;
    }else{
        tail++;
    }
}

if (head == 11) {
    console.log("Heads wins 11 times");
}else if (tail == 11) {
    console.log("Tails wins 11 times");
}