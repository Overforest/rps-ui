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

// Targeting nodes with selectors

const rockBtn = document.querySelector('.buttons').querySelector('#rock');
const paperBtn = document.querySelector('.buttons').querySelector('#paper');
const scissorsBtn = document.querySelector('.buttons').querySelector('#scissors');

// Adding event listeners

rockBtn.addEventListener('click', () => {
  console.log('Rock');
});

paperBtn.addEventListener('click', () => {
  console.log('Paper');
});

scissorsBtn.addEventListener('click', () => {
  console.log('Scissors');
});