function playGame() {
    
    let score = 0;
    
    function getComputerChoice() {
        let arr = ["rock", "paper", "scissors"];
        return arr[(Math.floor(Math.random() * arr.length))];
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("Congrats, you win! Rock beats scissors.");
            return 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("Congrats, you win! Scissors beats paper.");
            return 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("Congrats, you win! Paper beats rock.");
            return 1;
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            alert("You lose! Paper beats rock.");
            return -1;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
             alert("You lose! Paper beats rock.");
            return -1;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
             alert("You lose! Paper beats rock.");
            return -1;
        }
        else if (playerSelection == "rock" && computerSelection == "rock") {
            alert("We tied! It seems we are equally matched.");
            return 0;
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            alert("We tied! It seems we are equally matched.");
            return 0;
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            alert("We tied! It seems we are equally matched.");
            return 0;
        }
        else {
            alert("I don't know that weapon. Try again.");
            return 0;
        }
    }

    function updateScore(points) {
        score += points;
    }

    let i = 1;
    while (i <= 5) {
        computerSelection = getComputerChoice();
        playerEntry = prompt("Select your weapon: rock, paper or scissors");
        playerSelection = playerEntry.toLowerCase();
        let result = playRound(playerEntry, computerSelection);
        points = parseInt(result);
        updateScore(points);
        
        i++;
        
        console.log(playerSelection);
        console.log(computerSelection);
        //console.log(playRound(playerSelection, computerSelection));
        //console.log(points);
        console.log(score);
    } 
    
    if (score > 0) {
        alert("You are the CHAMPION!");
        return "Player wins";
    } else if (score = 0) {
        alert("We tied! I DEMAND a rematch");
        return "Tie game";
    } else {
        alert("Better luck next time, LOSER!");
        return "Computer wins";
    }
}
playGame();
