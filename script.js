const computerSelection = getComputerChoice();
// const playerSelection = prompt(
//   `Do you choose rock, paper or scissors`
// ).toUpperCase();
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

// game count
// do 5 games
// tie do not score
// final score after 5 games

function playGame() {
  for (let i = 1; i < 6; i++) {
    const playerSelection = prompt(
      `Do you choose rock, paper or scissors`
    ).toUpperCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(`Final score : ${playerScore} to ${computerScore}`);
}

playGame();
