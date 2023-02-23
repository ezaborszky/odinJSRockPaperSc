

function getComputerChoice (){
    let x =  Math.floor(Math.random()*3);

    if (x === 0) {
        return ("rock");
    } else if (x === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

let playerSelection;
let computerSelection; 

const gameRound = function (input) {
    
playerSelection = input;
computerSelection = getComputerChoice();    

        if (playerSelection === computerSelection) {
        
        return 0;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        return 1;
    }  else if (playerSelection === "paper" && computerSelection === "rock" ) {
        
        return 1;
    }  else if (playerSelection === "rock" && computerSelection === "scissors") {
        
        return 1;
    } else {
        
        return 2;
    }
};

let playerPoints = 0;
let computerPoints = 0;
let round = 0;

const game = document.getElementById("game");
const pointerCounterPlayer = document.getElementById("playerpoints");
const pointerCounterComputer = document.getElementById("computerpoints");
const counterRound = document.getElementById("round");
const logBook = document.getElementById("logbook")

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {button.addEventListener('click', () => {
    console.log(button.id);
    
    if (round < 5) {
    let returnValue = gameRound(button.id);
    let winner;
    round++;
    if (returnValue === 1) {
        winner = "Player wins!";
        playerPoints++;
    } else if (returnValue === 2) {
        winner = "Computer wins!";
        computerPoints++;
    } else {
        winner = "It's a draw!"
    }

    game.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. ${winner}`;
    pointerCounterPlayer.textContent = `Player points: ${playerPoints}`;
    pointerCounterComputer.textContent = `Computer points: ${computerPoints}`;
    const logEntry = document.createElement('p');
    logEntry.textContent = game.textContent;
    logBook.prepend(logEntry);
    counterRound.textContent = `Round: ${round}/5`} else {
        buttons.forEach(button => button.classList.add("inactive-button"));
        if (playerPoints > computerPoints){
            counterRound.textContent = `Game over. Player won the match.`
        } else if (computerPoints > playerPoints) {
            counterRound.textContent = `Game over. Computer won the match`
        } else {
            computerPoints = `Game over. It is a draw`
        }
        
    }
})})