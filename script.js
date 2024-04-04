const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// create an array with all the possibilities
// ask to choose a random number corresponding of each possibilities
// get the string value oh the possibility and return it
function getComputerChoice() {
  let possibility = ["ROCK", "PAPER", "SCISSORS"];
  let choice = possibility[Math.floor(Math.random() * possibility.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult.textContent = `It's a tie, you both choose ${playerSelection}.`;
  } else {
    if (
      (playerSelection === "ROCK" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
      computerScore++;
      roundResult.textContent = `You loose, ${computerSelection} beats ${playerSelection}.`;
      scoreComputer.textContent = `Computer Score : ${computerScore}`;
    } else {
      if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
      ) {
        playerScore++;
        roundResult.textContent = `You win, ${playerSelection} beats ${computerSelection}.`;
        scorePlayer.textContent = `Player Score : ${playerScore}`;
      }
    }
  }
}

const rockBtn = document.querySelector(".button_rock");
const paperBtn = document.querySelector(".button_paper");
const scissorsBtn = document.querySelector(".button_scissors");
const scorePlayer = document.querySelector(".player_score");
const scoreComputer = document.querySelector(".computer_score");
const roundResult = document.querySelector(".round_result");

rockBtn.addEventListener("click", () => {
  const playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWin(playerScore, computerScore);
});

paperBtn.addEventListener("click", () => {
  const playerSelection = "PAPER";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWin(playerScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
  const playerSelection = "SCISSORS";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWin(playerScore, computerScore);
});

function whoWin(playerScore, computerScore) {
  if (playerScore === 5) {
    const matchWinner = document.createElement("h2");
    matchWinner.textContent = `Congrats, you beat the computer ${playerScore} to ${computerScore}`;
    roundResult.appendChild(matchWinner);
  } else {
    if (computerScore === 5) {
      const matchWinner = document.createElement("h2");
      matchWinner.textContent = `Sorry, Computer beats you ${computerScore} to ${playerScore}`;
      roundResult.appendChild(matchWinner);
    }
  }
}
