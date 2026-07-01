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

    return choice

}

function getHumanChoice() {
    
    let choice = prompt("Rock, paper, scissors!");

    return choice;

}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {

   humanChoice = humanChoice.toLowerCase()

   if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++, console.log("You lose! Paper beats Rock.");
   } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++, console.log("You lose! Scissors beats Paper.");
   } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++, console.log("You lose! Rock beats Scissors.");
   } if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++, console.log("You win! Paper beats Rock.");
   } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++, console.log("You win! Scissors beats Paper.");
   } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++, console.log("You win! Rock beats Scissors.");
   } else if (humanChoice === computerChoice) {
    console.log("Tie!");
   }

    
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


