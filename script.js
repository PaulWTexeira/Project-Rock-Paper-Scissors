function getComputerChoice() {

    let numb = Math.floor(Math.random() * 3)

    let choice = "choice"

    if (numb === 0 ) {
        choice = "rock"
    } else if (numb === 1) {
       choice = "paper"
    } else if (numb === 2) {
        choice = "scissors"
    }

    return choice

}

function getHumanChoice() {
    
    let choice = prompt("Rock, paper, scissors!")

    const rock = "rock"

    const paper = "paper"

    const scissors = "scissors"

    if (choice === rock) {
        rock
    } else if (choice === paper) {
        paper
    } else if (choice === scissors) {
        scissors
    }

    return choice

}

let humanScore = 0

let computerScore = 0


