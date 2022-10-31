function isZero(){
    let randomNumber = (Math.floor(Math.random() * 10));
    
    if (randomNumber === 0){
        return randomNumber = Math.floor(Math.random() * 10)
    }
    else{
        return randomNumber
    }
}
function round(){
    if (scissors && playerChoice == "paper"){
        loss += 1
        return `You lost scissors beats ${playerChoice}`;
    }
    else if ( paper && playerChoice == "rock" ){
        loss += 1
        return `You lost paper beats ${playerChoice}`;
    }
    else if (rock && playerChoice == "scissors"){
        loss += 1
        return `You lost rock beats ${playerChoice}`;
    }
    else if (scissors && playerChoice =="rock"){
        win += 1
        return `You won! ${playerChoice} beats scissors`
    } 
    else if (paper && playerChoice == "scissors"){
        win += 1
        return `You won! ${playerChoice} beats paper`
    }  
    else if(rock && playerChoice == "paper") {
        win += 1
     return `You won! ${playerChoice} beats rock`;
    }
    else{
        tie += 1;
        return "Tie!"
    }
}

function game(){
    for (let i = 0; i < 6; i++){
        console.log(round())
        console.log(botChoice)
        // playerChoice = prompt('Please type rock, paper, or scissors').toLowerCase();
        console.log(`Round ${iRound = i + 1}`)
    }
    console.log(`You won ${win} times. You lost ${loss}. You tied ${tie})`);

}
// let playerChoice = prompt('Please type rock, paper, or scissors').toLowerCase();
let playerChoice = 'paper'
let tie = 0;
let win = 0;
let loss = 0;
let iRound = 0;
let botChoice = isZero();

const paper = botChoice > 3 && botChoice < 7;
const rock = botChoice > 0 && botChoice < 4;
const scissors = botChoice > 7 && botChoice < 10;

game()
