function playGame() {
    
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;

    function getComputerChoice() {
        let arr = ["rock", "paper", "scissors"];
        return arr[(Math.floor(Math.random() * arr.length))];
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            //alert("Congrats, you win! Rock beats scissors.");
            return "player wins";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            //alert("Congrats, you win! Scissors beats paper.");
            return "player wins";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            //alert("Congrats, you win! Paper beats rock.");
            return "player wins";
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            //alert("You lose! Paper beats rock.");
            return "computer wins";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
             //alert("You lose! Paper beats rock.");
            return "computer wins";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
             //alert("You lose! Paper beats rock.");
            return "computer wins";
        }
        else if (playerSelection == "rock" && computerSelection == "rock") {
            //alert("We tied! It seems we are equally matched.");
            return "tie game";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            //alert("We tied! It seems we are equally matched.");
            return "tie game";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            //alert("We tied! It seems we are equally matched.");
            return "tie game";
        }
        else {
            alert("I don't know that weapon. Try again.");
            return "try again";
        }
    }
   
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
               //alert(button.id)
               playerSelection = button.id;
                const playerWeapon = document.querySelector("#playerWeapon");
                const div1 = document.createElement("div");
               div1.textContent = `${playerSelection}`;
               playerWeapon.appendChild(div1);
              
               computerSelection = getComputerChoice();
               const computerWeapon = document.querySelector("#computerWeapon");
               const div2 = document.createElement("div");
               div2.textContent = `${computerSelection}`;
               computerWeapon.appendChild(div2);
               console.log(playerSelection);
                playRound(playerSelection, computerSelection);
                console.log(playRound(playerSelection, computerSelection));

            let result = playRound(playerSelection, computerSelection);
                if (result == "player wins") {
                    playerScore ++;
                } else if (result == "computer wins") {
                    computerScore ++;
            };
            console.log(playerScore);
            console.log(computerScore);

                //const player = document.querySelector("#player");
                //const pointsP = document.createElement("p1");
                //pointsP.textContent = `${playerScore}`;

                document.querySelector("#player").textContent = playerScore;
                document.querySelector("#computer").textContent = computerScore;
                

            const roundWinner = document.querySelector("#roundWinner");
            const div3 = document.createElement("div");
            div3.textContent = `${result}`;
            roundWinner.appendChild(div3);
            

            if (playerScore == 5) {
                //alert("You are the champion!!");
                winner = "player";
            } else if (computerScore == 5) {
                //alert("Better luck next time, LOSER!!");
                winner = "computer";
            }
            //alert(`${winner}`);
            const overallWinner = document.querySelector("#overallWinner");
            const div4 = document.createElement("div");
            div4.textContent = `${winner}`;
            overallWinner.appendChild(div4);

            

            if (winner == "player") {
                //alert("You are the champion!!");
                const div5 = document.createElement('div');
                div5.textContent = "You are the CHAMPION!!"
                div5.style.background = "green";
                div4.appendChild(div5);
            } else if (winner == "computer") {
                //alert("Better luck next time, LOSER!!");
                const div5 = document.createElement('div');
                div5.textContent = "You are the LOSER!! Better luck next time.";
                div5.style.background = "red";
                div4.appendChild(div5);
            }
            });
            
        });
}
playGame();
