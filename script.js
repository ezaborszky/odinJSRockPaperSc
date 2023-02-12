

function getComputerChoice (){
    let x =  Math.floor(Math.random()*3);

    if (x === 0) {
        return ("Rock");
    } else if (x === 1) {
        return ("Paper");
    } else {
        return ("Scissor");
    }
}

function playRound (){
    let computerSelection = getComputerChoice().toLowerCase();
   
   
    let playerSelection = (prompt("Enter your choice!", "")).toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
        alert("Please enter Rock, Paper or Scissor!")
        location. reload() 
    } else {
    if (playerSelection === computerSelection) {
        alert(`Computer chose ${computerSelection}, player choose ${playerSelection}, it's a draw!`);
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        alert(`Computer chose ${computerSelection}, player choose ${playerSelection}, the Player wins!`);
        return 1;
    }  else if (playerSelection === "paper" && computerSelection === "rock" ) {
        alert(`Computer chose ${computerSelection}, player choose ${playerSelection}, the Player wins!`);
        return 1;
    }  else if (playerSelection === "rock" && computerSelection === "scissor") {
        alert(`Computer chose ${computerSelection}, player choose ${playerSelection}, the Player wins!`);
        return 1;
    } else {
        alert(`Computer chose ${computerSelection}, player choose ${playerSelection}, the Computer wins!`);
        return 2;
    }
    
}
    }   


function game(){
    for (let i = 0; i <= 5 ; i++) {
        let x = playRound();
        console.log(x);
    }
}

game();