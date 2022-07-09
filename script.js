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
             console.log (`Draw. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return 0;

        } else if (computerPlay == "rock" && humanPlay == "scissors"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return -1;

        } else if (computerPlay == "paper" && humanPlay == "scissors"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return 1;

        } else if (computerPlay == "rock" && humanPlay == "paper"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return 1;

        } else if (computerPlay == "paper" && humanPlay == "rock"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return -1;

        } else if (computerPlay == "scissors" && humanPlay == "rock"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return 1;

        } else if (computerPlay == "scissors" && humanPlay == "paper"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             return -1;

        }   else  console.log(humanPlay)
        }
        


function fullGame(rounds=5){
            rounds = prompt("How many rounds?", 5)
            if (isNaN(rounds) == 1){
                alert("Please enter a number");
            } else {
            for (let i = 0; i < rounds; i++) {
                console.log(game());
                    }
            }
        }

fullGame();