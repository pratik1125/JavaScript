//nested if else
let winningnumber=44;
let userguess= +prompt("Enter A number");
//but here the prompt will take the value in string , so we need to convert it into number so we add + before it
//console.log(typeof userguess,userguess);

if(winningnumber===userguess){
    console.log("Your Guess is Right")
}else{
    if(userguess < winningnumber){
        console.log("Too Low")
    }else{
        console.log("To High")
    }
}
// Here we used one if-else statement , but in else statement we run another if-else statement so this is called nested if-else

