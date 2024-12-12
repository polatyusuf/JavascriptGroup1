function playGame(humanChoice) {
  let gameScore = {
    playerScore: 0,
    computerScore: 0,
  };

  let scoreItem = localStorage.getItem("score");

  if (!scoreItem) {
    let gameScoreString = JSON.stringify(gameScore);
    localStorage.setItem("score", gameScoreString);
  } else {
    let scoreItemObject = JSON.parse(scoreItem);
    gameScore.computerScore = scoreItemObject.computerScore;
    gameScore.playerScore = scoreItemObject.playerScore;
  }

  // Array
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const imgPath = "images/";

  document.getElementById(
    "compChoice"
  ).innerText = `Computer choose: ${computerChoice}`; //Anzeige der Computerwahl auf der Webseite
  console.log(`Computer choose: ${computerChoice}`);
  //document.getElementById("playerChoice").innerText=`You choose: ${humanChoice}`;
  // Vergleich zwischen der wahl des Menschen un der Wahl de Computers

  let resultMessage;
  if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    resultMessage = `${humanChoice} beats ${computerChoice}, You win!`;
    gameScore.playerScore = gameScore.playerScore + 1;
  } else if (humanChoice === computerChoice) {
    resultMessage = "No winner, it's a tie!";
  } else {
    resultMessage = `${computerChoice} beats ${humanChoice}, Computer wins!`;
    gameScore.computerScore = gameScore.computerScore + 1;
  }

  // Update the localeStorage
  gameScoreString = JSON.stringify(gameScore);
  localStorage.setItem("score", gameScoreString);

  // // Anzeige des results auf der Webseite
  document.getElementById("result").innerText = resultMessage;

  // Aktualisierung der Punktzahl aud der Webseite
  document.getElementById(
    "player"
  ).innerText = `Player: ${gameScore.playerScore}`;
  document.getElementById(
    "computer"
  ).innerText = `Computer: ${gameScore.computerScore}`;

  // document.getElementById("playerImage").src = `${imgPath}${humanChoice}.svg`;
  document.getElementById("playerImage").src = `${imgPath}${humanChoice}.svg`;
  console.log(`${imgPath}${humanChoice}.svg`);
}

//Zurückstzen
function resetGame() {
  let initScore = {
    playerScore: 0,
    computerScore: 0,
  };

  localStorage.setItem("score", JSON.stringify(initScore));

  document.getElementById("player").innerText = "Player: 0";
  document.getElementById("computer").innerText = "Computer: 0";
  document.getElementById("result").innerText = "Choose an option to play!";
  document.getElementById("compChoice").innerText = "";
}
