function getComputerChoice() {
  let weapon = ["Rock", "Paper", "Scissors"];
  let result = Math.floor(Math.random() * weapon.length);
  return weapon[result];
}

function playRound(playerChoice, computerChoice) {
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

function showResult(playerChoice) {
  console.log(`Player choice: ${playerChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer Choice: ${computerChoice}`);
  const score = playRound(playerChoice, computerChoice);
  console.log(score);
}
console.log(showResult("Scissors"));
