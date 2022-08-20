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
    return lowercaseAnswer;
}

let roundResult = 0;
    
function game(){
    let computerPlay = computerCalculation();
    let humanPlay = playerInput();
    document.querySelector("#score").style.fontSize = "16px";
        if (computerPlay == humanPlay){
             document.querySelector("#summary").textContent = (`Draw. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 0;

        } else if (computerPlay == "rock" && humanPlay == "scissors"){
             document.querySelector("#summary").textContent = (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult - 1;

        } else if (computerPlay == "paper" && humanPlay == "scissors"){
             document.querySelector("#summary").textContent = (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;

        } else if (computerPlay == "rock" && humanPlay == "paper"){
             document.querySelector("#summary").textContent = (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;

        } else if (computerPlay == "paper" && humanPlay == "rock"){
             document.querySelector("#summary").textContent = (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult -1;

        } else if (computerPlay == "scissors" && humanPlay == "rock"){
             document.querySelector("#summary").textContent = (`Win. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult + 1;

        } else if (computerPlay == "scissors" && humanPlay == "paper"){
             document.querySelector("#summary").textContent = (`Lose. Human chose ${humanPlay}, Computer chose ${computerPlay}!`);
             roundResult = roundResult - 1;
        }
    
        if (roundResult === 3) {
            document.querySelector("#score").textContent = `You win!`;
            document.querySelector("#score").style.fontSize = "40px";
            roundResult = 0;
        } else if (roundResult === -3) {
            document.querySelector("#score").textContent = `You lose!`;
            document.querySelector("#score").style.fontSize = "40px";
            roundResult = 0;
        } else {
            document.querySelector("#score").textContent = `The current score is ${roundResult}`;
            return roundResult;
    }
    
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
            let absoluteScore = Math.absroundResult;
            console.log(`Your score is ${roundResult}!`);
            if (roundResult < 0){
                console.log(`You lose! Computer beat you by ${absoluteScore} rounds`);
                } else if (roundResult == 0) {
                console.log("Draw");
                } else {
                console.log(`You win! You beat computer by ${absoluteScore} rounds`);
                }
            }
