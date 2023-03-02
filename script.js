// A function that gets a random choice from the computer => getComputerChoice() 

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const choice = options[Math.floor(Math.random() * options.length + 1)];
  return choice;
}

// A function that checks the winner => checkWinner()

function checkWinner(playerSelection, computerSelection) {
  if(playerSelection == computerSelection) {
      return 'Tie';
  } else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
      return 'Player';
  } else {
      return 'Computer';
  }
}

// Play a single round of the game

function playRound(playerSelection, computerSelection) {
  const matchResult = checkWinner(playerSelection, computerSelection);
}

// Game function

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (checkWinner(playerSelection, computerSelection) == 'Player') {
    playerScore++;
  } 
  else (checkWinner(playerSelection, computerSelection) == 'Computer') 
  {
    computerScore++
  }
  console.log(checkWinner(playerSelection, computerSelection));
  console.log(`Player ${playerScore} - ${computerScore} Computer`);
}
// Targeting nodes with selectors

const rockBtn = document.querySelector('.buttons').querySelector('#rock');
const paperBtn = document.querySelector('.buttons').querySelector('#paper');
const scissorsBtn = document.querySelector('.buttons').querySelector('#scissors');

// Adding event listeners

rockBtn.addEventListener('click', () => {
  const playerSelection = 'rock';
  game(playerSelection);
});

paperBtn.addEventListener('click', () => {
  const playerSelection = 'paper';
  game(playerSelection);
});

scissorsBtn.addEventListener('click', () => {
  const playerSelection = 'scissors';
  game(playerSelection);
});

//

let computerScore = 0;
let playerScore = 0;