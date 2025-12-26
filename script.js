function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3)
   if (choice === 0) {
    console.log("rock");
    } else if (choice === 1) {
        console.log("paper")
     } else if (choice === 2) {
        console.log("scissors")
        }
    return choice
    }