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
  }

  return result;
}

const tieScore = document.getElementById("tieScore");

function playGame(playerChoice) {
  const computerChoice = computerSelection();
  const result = game(playerChoice, computerChoice, name);

  resultDisplay.textContent = `${result.message} Computer chose ${result.computerChoice}`;

  if (result.message.includes("Player wins")) {
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else if (result.message.includes("Computer wins")) {
    computerPoints++;
    computerScore.textContent = computerPoints;
  } else {
    tiePoints++;
    tieScore.textContent = tiePoints;
  }
  endGame();
}

function endGame() {
  if (playerPoints === 3) {
    resultDisplay.textContent = `${playerName} wins overall! ${playerName} Score: ${playerPoints}, Computer Score: ${computerPoints}, Tie Score: ${tiePoints}`;
    resetScore();
  } else if (computerPoints === 3) {
    resultDisplay.textContent = `Computer wins overall! ${playerName} Score: ${playerPoints}, Computer Score: ${computerPoints}, Tie Score: ${tiePoints}`;
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

