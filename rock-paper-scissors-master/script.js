let playerScore = 0;
let computerScore = 0;

function playGame(humanChoice) {
    // Array
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const imgPath = "images/";

    document.getElementById("compChoice").innerText = `Computer choose: ${computerChoice}`; //Anzeige der Computerwahl auf der Webseite
    console.log(`Computer choose: ${computerChoice}`); 
    //document.getElementById("playerChoice").innerText=`You choose: ${humanChoice}`;
    // Vergleich zwischen der wahl des Menschen un der Wahl de Computers
   
    let resultMessage;
    if ((humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "rock" && computerChoice === "scissors")) {
        resultMessage = `${humanChoice} beats ${computerChoice}, You win!`;
        playerScore++;
    } 
    else if (humanChoice === computerChoice) {
        resultMessage = "No winner, it's a tie!";
    } 
    else {
        resultMessage = `${computerChoice} beats ${humanChoice}, Computer wins!`;
        computerScore++;
    }
    

    // // Anzeige des results auf der Webseite
    document.getElementById("result").innerText = resultMessage;

    // Aktualisierung der Punktzahl aud der Webseite
    document.getElementById("player").innerText = `Player: ${playerScore}`;
    document.getElementById("computer").innerText = `Computer: ${computerScore}`;

    // document.getElementById("playerImage").src = `${imgPath}${humanChoice}.svg`;
    document.getElementById("playerImage").src = `${imgPath}${humanChoice}.svg`;
    console.log(`${imgPath}${humanChoice}.svg`)

}

//Zurückstzen
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player").innerText = "Player: 0";
    document.getElementById("computer").innerText = "Computer: 0";
    document.getElementById("result").innerText = "Choose an option to play!";
    document.getElementById("compChoice").innerText = "";
}
