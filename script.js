const computerSelection = getComputerChoice();
const playerSelection = "paper";

function getComputerChoice() {
  let possibility = ["ROCK", "PAPER", "SCISSORS"];
  let choice = possibility[Math.floor(Math.random() * possibility.length)];
  return choice;
}

console.log(getComputerChoice());
