function getComputerChoice(){
    let paper = 0;
    let rock = 2;
    let scissors = 1;
    //generate a random number between 0 and 1 Mutiply by 3 and round it
    let randomNum = Math.floor(Math.random() * 3)
    
    // checks what type the number is and returns it in string format
    return randomNum == paper ? 'paper' : randomNum == rock ? 'rock' : randomNum == scissors ? 'scissors' : "Broken, getComputerChoice"
}
function oneRound(getComputerChoice, playerSelection){
    // console.log("computer " + getComputerChoice)
    // console.log("player " + playerSelection)
    // playerSelection == playerSelection.toLowerCase;
    // Rock Paper Scissors User vs Bot comparisons
   
    return playerSelection == 'paper' && getComputerChoice == 'paper' ? ("You Tied with the Machine..."  )
    : playerSelection == 'paper' && getComputerChoice == 'rock' ? ("You Win! Paper beats rock")
    : playerSelection == 'paper' && getComputerChoice == 'scissors' ? ("You lost... Scissors beat paper")
    // Rock comparisons
    :  playerSelection == 'rock' && getComputerChoice == 'rock' ? ("You Tied with the Machine..." )
    : playerSelection == 'rock' && getComputerChoice == 'scissors' ? ("You Win! Rock beats scissors")
    : playerSelection == 'rock' && getComputerChoice == 'paper' ? ("You lost... Paper beats rock")
    // Scissors Comparisons
    :  playerSelection == 'scissors' && getComputerChoice == 'paper' ? ("You Tied with the Machine..." )
    : playerSelection == 'scissors' && getComputerChoice == 'paper' ? ("You Win! Scissors beats paper")
    : playerSelection == 'scissors' && getComputerChoice == 'rock' ? ("You lost... Rocks beat scissors")
    : "Broken, oneRound()"
}
    function game(){
        for (let i = 0; i < 5; i++){
            console.log(oneRound(getComputerChoice(),playerSelection))
        }
    }
    let playerSelection = prompt("Type rock paper scissors");
    // let Win = 0;
    // let Loss = 0;
    // let Tie = 0;
    console.log(game())
    // console.log(`You Won ${Win} times!\n You Tied ${Tie} times!\n You lost ${Loss} times....`)
// console.log(oneRound(getComputerChoice(),playerSelection))

