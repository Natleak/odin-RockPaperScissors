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
    return `It's a tie, you both choose ${playerSelection}. Score is ${playerScore} to ${computerScore}`;
  } else {
    if (
      (playerSelection === "ROCK" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
      computerScore++;
      return `You loose, ${computerSelection} beats ${playerSelection}. Score is ${playerScore} to ${computerScore}`;
    } else {
      if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
      ) {
        playerScore++;
        return `You win, ${playerSelection} beats ${computerSelection}. Score is ${playerScore} to ${computerScore}`;
      } else {
        return `${playerSelection} is not a possibility`;
      }
    }
  }
}

const rockBtn = document.querySelector(".button_rock");
const paperBtn = document.querySelector(".button_paper");
const scissorsBtn = document.querySelector(".button_scissors");
const scorePlayer = document.querySelector(".player_score");
const scoreComputer = document.querySelector(".computer_score");
const resultMessage = document.querySelector(".round_result");

rockBtn.addEventListener("click", () => {
  const playerSelection = "ROCK";
  playRound(playerSelection, computerSelection);
});
