console.log("Working...")
// botInput;
function isZero(){
    let randomNumber = (Math.floor(Math.random() * 10));
    
    if (randomNumber === 0){
        return randomNumber = Math.floor(Math.random() * 10)
    }
    else{
        return randomNumber
    }
}
//Rock = 1 to 3,
// Paper = 4 to 6, 
//Scissors = 7 to 9
function round(){
    if (botChoice > 6 && playerChoice == "paper" || botChoice > 3 && playerChoice == "rock" || botChoice > 0 && playerChoice == "scissors"){
        return `You lost ${botChoice} beats ${playerChoice}`;
    }
    else{
        return `You won! ${playerChoice} beats ${botChoice}`;
    }

}
const playerChoice = "paper";
const botChoice = isZero();
console.log(round())
