let playerChoice = null;

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
    let playerAnswer = playerChoice.toString();
    let lowercaseAnswer = playerChoice.toLowerCase();
        
        if (["rock","paper","scissors"].includes(lowercaseAnswer)) {
            return lowercaseAnswer;
        } else return "Please type rock, paper or scissors";
    }

 let roundResult = 0;
    
function game(){
    let computerPlay = computerCalculation();
    let humanPlay = playerInput();
        if (computerPlay == humanPlay){
             console.log (`Draw. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 0;
             return (roundResult);

        } else if (computerPlay == "rock" && humanPlay == "scissors"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult - 1;
             return (roundResult);

        } else if (computerPlay == "paper" && humanPlay == "scissors"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;
             return (roundResult);

        } else if (computerPlay == "rock" && humanPlay == "paper"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;
             return (roundResult);

        } else if (computerPlay == "paper" && humanPlay == "rock"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult -1;
             return (roundResult);


        } else if (computerPlay == "scissors" && humanPlay == "rock"){
             console.log (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;
             return (roundResult);


        } else if (computerPlay == "scissors" && humanPlay == "paper"){
             console.log (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult - 1;
             return (roundResult);


        }   else  console.log(humanPlay)
        }
        


// function to return id 

function startGame(){
        playerChoice = this.id;
        return game();
}

// select and add event listener to buttons

const chooseRock = document.getElementById("rock").addEventListener("click", startGame);
const choosePaper = document.getElementById("paper").addEventListener("click", startGame);
const chooseScissors = document.getElementById("scissors").addEventListener("click", startGame);


// full game //        

function fullGame(rounds=5){
            rounds = prompt("How many rounds?", 5)
            if (isNaN(rounds) == 1){
                alert("Please enter a number");
            } else {
            for (let i = 0; i < rounds; i++) {
                game();
            }
            }
            let absoluteScore = Math.abs(roundResult);
            console.log(`Your score is ${roundResult}!`);
            if (roundResult < 0){
                console.log(`You lose! Computer beat you by ${absoluteScore} rounds`);
                } else if (roundResult == 0) {
                console.log("Draw");
                } else {
                console.log(`You win! You beat computer by ${absoluteScore} rounds`);
                }
            }
