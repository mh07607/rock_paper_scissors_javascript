

const moves = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let index = Math.floor(Math.random()*3);
    return moves[index];
}

function playRound(playerselection, computerselection){
    playerselection = playerselection.toLowerCase();
    if(playerselection == computerselection){
        return "It's a tie!"
    }

    else if(playerselection == "rock" && computerselection == "paper"){
        return "You Lose! Paper beats Rock"
    }else if(playerselection == "scissors" && computerselection == "paper"){
        return "You Win! Scissors beat Paper"
    }
    
    else if(playerselection == "paper" && computerselection == "rock"){
        return "You Win! Paper beats Rock"
    }else if(playerselection == "scissors" && computerselection == "rock"){
        return "You Lose! Rock beats Scissors"
    }

    else if(playerselection == "rock" && computerselection == "scissors"){
        return "You Win! Rock beats Scissors"
    }else if(playerselection == "paper" && computerselection == "scissors"){
        return "You Lose! Scissors beat Paper"
    }    
}

function game(){
    let playerwins = 0;
    let computerwins = 0;
    for(let i = 0; i < 5; i++)
    {
        let playerselection = prompt("Rock, paper or scissors?");
        let computerselection = getComputerChoice();

        round_result = playRound(playerselection, computerselection);

        console.log(playerselection);
        console.log(computerselection);
        console.log(round_result);

        if(round_result[4] == 'W'){
            playerwins = playerwins + 1;
        } else if (round_result[4] == 'L'){
            computerwins= computerwins + 1;
        }
    }

    if(playerwins > computerwins){
        console.log("You Win the game!");
    } else if(playerwins < computerwins){
        console.log("You Lose the game!");
    }
    else{
        console.log("The game's a Draw!");
    }

}

game()