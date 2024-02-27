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

function game(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function playGame(playerChoice) {
  const computerChoice = computerSelection();
  const result = game(playerChoice, computerChoice);

  resultDisplay.textContent = result;

  if (result.includes("Player wins")) {
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else if (result.includes("Computer wins")) {
    computerPoints++;
    computerScore.textContent = computerPoints;
  } else {
    tiePoints++;
    tieScore.textContent = tiePoints;
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

function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function game(playerChoice, computerChoice) {
  let result;

  if (playerChoice === computerChoice) {
    result = { message: "Tie!", computerChoice };
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = { message: "Player wins!", computerChoice };
  } else {
    result = { message: "Computer wins!", computerChoice };
  }

  return result;
}

function playGame(playerChoice) {
  const computerChoice = computerSelection();
  const result = game(playerChoice, computerChoice);

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
}