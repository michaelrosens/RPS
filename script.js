
const name = prompt('Please enter your name:');

const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resetButton = document.getElementById("resetButton");

let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function game(playerChoice, computerChoice, playerName) {
  let result;

  if (playerChoice === computerChoice) {
    result = { message: "Tie!", computerChoice };
    tiePoints++;
    tieScore.textContent = tiePoints; 
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = { message: `${playerName} wins!`, computerChoice };
    playerPoints++;
    playerScore.textContent = playerPoints;

  } else {
    result = { message: `Computer wins!`, computerChoice };
    computerPoints++;
    computerScore.textContent = computerScore;
  }

  return result;
}
const tieScore = document.getElementById("tieScore");


function endGame() {
  if (playerPoints === 3) {
    resultDisplay.textContent = `${name} wins overall!`;
    resetScore();
  } else if (computerPoints === 3) {
    resultDisplay.textContent = `Computer wins overall!`;
    resetScore();
  }
}

function resetScore() {
  playerPoints = 0;
  computerPoints = 0;
  tiePoints = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  tieScore.textContent = 0;
}