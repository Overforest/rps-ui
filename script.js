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
  } else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
    computerScore++
  }
  if (checkWinner(playerSelection, computerSelection) == 'Player' || checkWinner(playerSelection, computerSelection) == 'Computer') {
    displayer.textContent = `${checkWinner(playerSelection, computerSelection)} was the winner`
  } else if (checkWinner(playerSelection, computerSelection) == 'Tie') {
    displayer.textContent = `There was a tie.`
  };
  if (computerScore == 5) {
      displayer.textContent = 'Computer has won the game!';
      disableButtons();
      refreshButton();
    } else if (playerScore == 5) {
      displayer.textContent = 'Player has won the game!';
      disableButtons();
      refreshButton();
    }
  score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}
// Targeting nodes with selectors

const rockBtn = document.querySelector('.buttons').querySelector('#rock');
const paperBtn = document.querySelector('.buttons').querySelector('#paper');
const scissorsBtn = document.querySelector('.buttons').querySelector('#scissors');
const displayer = document.querySelector('#displayer');
const score = document.querySelector('#score');
const buttons = [rockBtn, paperBtn, scissorsBtn];
const refresh = document.querySelector('#refresh');

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

// Setting initial values for scores

let computerScore = 0;
let playerScore = 0;

// A function that disable buttons

function disableButtons() {
  for (let i = 0; i < buttons.length; i++)
    buttons[i].disabled = true;
}

// A function that let you refresh the page with a button after winning the game

function refreshButton() {
  const refreshButton = document.createElement('button');
  refreshButton.textContent = 'Start a new game';
  refreshButton.addEventListener('click', () => {
    location.reload();
  });
  refresh.appendChild(refreshButton);
}

