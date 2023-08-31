const totalScore = { playerScore: 0, computerScore: 0 };

function getComputerChoice() {
  let weapon = ["Rock", "Paper", "Scissors"];
  let result = Math.floor(Math.random() * weapon.length);
  return weapon[result];
}

function getResult(playerChoice, computerChoice) {
  let score = 0;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a Tie!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  playerScoreDiv.innerText = `👨 ${playerChoice}`;
  computerScoreDiv.innerText = `🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();

  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;

  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsSelect");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
}

function endGame() {}

playGame();
