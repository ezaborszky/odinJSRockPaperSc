

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
   
   
    function checkInput() {while (true) {let playerSelection = (prompt("Enter your choice!", "")).toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
        return playerSelection;
        break;
        
        } else{
            alert("Please enter \"Rock\", \"Paper\", or \"Scissor\"");
        }
       
    }}

    playerSelection = checkInput();
    
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



function game(){
    var playerStat = 0;
    var computerStat = 0;
    for (let i = 0; i <= 5 ; i++) {
        let x = playRound();
      

        if (x === 1) {
            playerStat++;
        } else if (x === 2) {
            computerStat++;
        }

        console.log(`Player: ${playerStat}  Computer: ${computerStat}`);
    }
    if (playerStat > computerStat) {
        console.log("Player wins the game!");
    } else if (computerStat > playerStat) {
        console.log("Computer wins the game!");
    } else {
        console.log("It is a draw (or a bug)!")
    }
}

game();