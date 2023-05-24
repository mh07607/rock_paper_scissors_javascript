

const moves = ['rock', 'paper', 'scissors'];
var rounds = 0;
var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random()*3);
    return moves[index];
}

function playRound(playerselection, computerselection){
    rounds = rounds+1;
    playerselection = playerselection.toLowerCase();
    if(playerselection == computerselection){
        return "It's a tie!";
    }

    else if(playerselection == "rock" && computerselection == "paper"){
        computerScore = computerScore+1;
        return "You Lose! Paper beats Rock";
    }else if(playerselection == "scissors" && computerselection == "paper"){
        playerScore = playerScore+1;
        return "You Win! Scissors beat Paper";
    }
    
    else if(playerselection == "paper" && computerselection == "rock"){
        playerScore = playerScore+1;
        return "You Win! Paper beats Rock";
    }else if(playerselection == "scissors" && computerselection == "rock"){
        computerScore = computerScore+1;
        return "You Lose! Rock beats Scissors";
    }

    else if(playerselection == "rock" && computerselection == "scissors"){
        playerScore = playerScore+1;
        return "You Win! Rock beats Scissors";
    }else if(playerselection == "paper" && computerselection == "scissors"){
        computerScore = computerScore+1;
        return "You Lose! Scissors beat Paper";
    }    
}

function game(){
    //getting componenets from html
    const buttons = document.querySelectorAll("button");
    const roundStatus = document.querySelector(".round_status");
    const ui__playerScore = document.querySelector("#playerScore");
    const ui__computerScore = document.querySelector("#computerScore");
    const ui_winner = document.querySelector("#winner");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //simulating one round by PlayRound function; 
            //passing in button text because text of button tells us the corresponding move of the player. 
            roundStatus.textContent = "Round:" + (rounds+1) + 
                                      playRound(button.textContent, getComputerChoice());
            ui__computerScore.textContent = computerScore;
            ui__playerScore.textContent = playerScore;
            if(rounds > 4){
                rounds = 0;
                if(playerScore > computerScore){
                    ui_winner.textContent = "Player wins";
                } else if(playerScore < computerScore){
                    ui_winner.textContent = "Computer wins";
                } else {
                    ui_winner.textContent = "It's a tie";
                }
                playerScore = 0;
                computerScore = 0;
                ui__computerScore.textContent = 0;
                ui__playerScore.textContent = 0;
            }
            
        });
    });
    
}

game();