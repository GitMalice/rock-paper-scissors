let computerSelection = "";
let playerSelection = "";
let yourPoints = 0;
let compPoints = 0;
let result = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomPick = getRandomInt(3);

function computerPlay() {
  switch (randomPick) {
    case 0:
      return (computerSelection = "paper");
      break;
    case 1:
      return (computerSelection = "scissors");
      break;
    case 2:
      return (computerSelection = "rock");
      break;
    default:
      console.log("out of options");
  }
}

computerPlay();
// console.log("choix:" + computerSelection);

function play() {
  playerSelection = prompt(
    "Rock, Paper or Scissors ? (type 'R', 'P' or 'S' to play, 'Q' to quit)"
  );
  while (!playerSelection) {
    playerSelection = prompt(
      "Don't be shy, pick something ! So, Rock, Paper or Scissors ? (type 'R', 'P' or 'S' to play, 'Q' to quit)"
    );
  }
}

function wrongPlay() {
  playerSelection = prompt(
    "Wrong entry, please type a letter. So, which one is it gonna be? Rock, Paper or Scissors ? (type 'R', 'P' or 'S' to play, 'Q' to quit)"
  );
  while (!playerSelection) {
    playerSelection = prompt(
      "Don't be shy, pick something ! So, Rock, Paper or Scissors ? (type 'R', 'P' or 'S' to play, 'Q' to quit)"
    );
  }
  check(playerSelection);
}

function check(Usertext) {
  var lower = playerSelection.toLowerCase();
  if (lower === "r") {
    playerSelection = "rock";
  } else if (lower === "p") {
    playerSelection = "paper";
  } else if (lower === "s") {
    playerSelection = "scissors";
  } else if (lower === "q") {
    playerSelection = "quit";
  } else {
    console.log("Wrong entry");
    wrongPlay();
  }
}

function battle(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        result = `What a waste of time. Both of you played ${playerSelection}. It's a draw.`;
      }
      if (computerSelection == "paper") {
        compPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You lost!`;
      }
      if (computerSelection == "scissors") {
        yourPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You won!`;
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        yourPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You won!`;
      }
      if (computerSelection == "paper") {
        result = `What a waste of time. Both of you played ${playerSelection}. It's a draw.`;
      }
      if (computerSelection == "scissors") {
        compPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You lost!`;
      }
      break;
    case "scissors":
      if (computerSelection == "rock") {
        compPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You lost!`;
      }
      if (computerSelection == "paper") {
        yourPoints++;
        result = `You played ${playerSelection} and the computer played ${computerSelection}. You won!`;
      }
      if (computerSelection == "scissors") {
        result = `What a waste of time. Both of you played ${playerSelection}. It's a draw.`;
      }
      break;
    case "quit":
      console.log("Thanks for playing, see you next time");
      updateGame();
      break;
    default:
      console.log("The game encountered an error");
  }
}

function updateGame() {
  alert(
    `${result}. You have a score of ${yourPoints}, while the computer scores ${compPoints}.`
  );
}

function nextStep() {
  if (compPoints == 5) {
    alert(
      `The computer wins with ${compPoints} points while you got ${yourPoints}!`
    );
  } else if (yourPoints == 5) {
    alert(
      `You win with ${yourPoints} points while the poor computer only got ${compPoints}!`
    );
  } else {
    game();
  }
}

function game() {
  play();
  check(playerSelection);
  battle(playerSelection, computerSelection);
  updateGame();
  nextStep();
}

game();

// console.log(typeof playerSelection);
