
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

const computerSelection = getComputerChoice();
const playerEntry = prompt("Select your weapon: rock, paper or scissors");
const playerSelection = playerEntry.toLowerCase();


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
            return "Congrats, you win! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "Congrats, you win! Scissors beats paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "Congrats, you win! Paper beats rock.";
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return "We tied! It seems we are equally matched.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "We tied! It seems we are equally matched.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "We tied! It seems we are equally matched.";
    }
    else {
        return "I don't know that weapon. Try again.";
    } 
}
playRound();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));