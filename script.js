function getRandom() {
    return Math.random();
}

function computerCalculation(){
    let randomNumber=getRandom();
    if (randomNumber < 0.333333){
        return("rock");
    } else if (randomNumber > 0.333333 && randomNumber < 0.666666){
        return("paper");
    } else return("scissors")
}

function playerInput() {
    let playerAnswer = prompt("Your choice","type here");
    let lowercaseAnswer = playerAnswer.toLowerCase();
        
        if (["rock","paper","scissors"].includes(lowercaseAnswer)) {
            return lowercaseAnswer;
        } else return "Please type rock, paper or scissors";
    }

function game(){
    let computerPlay = computerCalculation();
    let humanPlay = playerInput();
        if (computerPlay == humanPlay){
            return `Draw. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "rock" && humanPlay == "scissors"){
            return `Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "paper" && humanPlay == "scissors"){
            return `Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "rock" && humanPlay == "paper"){
            return `Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "paper" && humanPlay == "rock"){
            return `Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "scissors" && humanPlay == "rock"){
            return `Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        } else if (computerPlay == "scissors" && humanPlay == "paper"){
            return `Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`;
        }   else return(humanPlay)
        }
        


function fullGame(rounds=5){
            rounds = prompt("How many rounds?", "Enter a number")
            for (let i = 0; i < rounds; i++) {
                console.log(game());
        }
}

fullGame();