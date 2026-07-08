function getComputerChoice() {

    let numb = Math.floor(Math.random() * 3);

    let choice = "choice";

    if (numb === 0 ) {
        choice = "rock";
    } else if (numb === 1) {
       choice = "paper";
    } else if (numb === 2) {
        choice = "scissors";
    }

    return choice;

}

function getHumanChoice() {
    
    let choice = prompt("Rock, paper, scissors!");

    return choice;

}

function playGame () {

    let humanScore = 0;

    let computerScore = 0;

    let rounds = 0;

    function playRound(humanChoice, computerChoice) {

   humanChoice = humanChoice.toLowerCase();

   if (humanChoice === "rock" && computerChoice === "paper") {
    rounds++, computerScore++, console.log(`Round ${rounds}`), console.log("You Lose! Paper Beats Rock."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (humanChoice === "paper" && computerChoice === "scissors") {
    rounds++, computerScore++, console.log(`Round ${rounds}`), console.log("You Lose! Scissors Beats Paper."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (humanChoice === "scissors" && computerChoice === "rock") {
    rounds++, computerScore++, console.log(`Round ${rounds}`), console.log("You Lose! Rock Beats Scissors."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (computerChoice === "rock" && humanChoice === "paper") {
    rounds++, humanScore++, console.log(`Round ${rounds}`), console.log("You Win! Paper Beats Rock."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (computerChoice === "paper" && humanChoice === "scissors") {
    rounds++, humanScore++, console.log(`Round ${rounds}`), console.log("You Win! Scissors Beats Paper."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (computerChoice === "scissors" && humanChoice === "rock") {
    rounds++, humanScore++, console.log(`Round ${rounds}`), console.log("You Win! Rock Beats Scissors."), console.log(`Human Score = ${humanScore} and Computer Score = ${computerScore}`);
   } else if (humanChoice === computerChoice) {
    rounds++, console.log("Tie!"), console.log(`Round ${rounds}`), console.log(`Human score = ${humanScore} and Computer Score = ${computerScore}`);
   }

    }

    playRound(getHumanChoice(), getComputerChoice())

    playRound(getHumanChoice(), getComputerChoice())

    playRound(getHumanChoice(), getComputerChoice())

    playRound(getHumanChoice(), getComputerChoice())

    playRound(getHumanChoice(), getComputerChoice())

if (rounds === 5 && humanScore > computerScore) {
    console.log("You Win The Game! Congrats!")
} else if (rounds === 5 && computerScore > humanScore) {
   console.log("You Lose The Game! Try Again!")
} else if (rounds === 5 && humanScore === computerScore) { 
    console.log("Draw Game! Try Again!")
}

}
