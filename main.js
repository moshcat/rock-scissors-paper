// rock = 0
// paper = 1
// scissors = 2

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Enemy choose rock");
      break;
    case 1:
      console.log("Enemy choose paper");
      break;
    case 2:
      console.log("Enemy choose scissors");
      break;
    default:
      try {
        console.log("Tidak ada pilihan");
      } catch (e) {
        console.error(e);
      }
  }
  return choice;
};

const getUserChoice = () => {
  let userChoice = prompt("Rock, Paper, Scissors!");
  let user = userChoice.toLowerCase();
  console.log("Your choice is " + user);
  switch (user) {
    case "rock":
      return (user = 0);
      break;
    case "paper":
      return (user = 1);
      break;
    case "scissors":
      return (user = 2);
      break;
    default:
      try {
        console.log("No return value");
      } catch (e) {
        console.error(e);
      }
  }
  return user, userChoice;
};

const humanSelection = getUserChoice();
const compSelection = getComputerChoice();
let humanScore = 0;
let comScore = 0;

function playRound(humanSelection, compSelection) {
  if (humanSelection === compSelection) {
    console.log("Tie!");
  } else if (
    (humanSelection == 0 && compSelection == 2) ||
    (humanSelection == 2 && compSelection == 1) ||
    (humanSelection == 1 && compSelection == 0)
  ) {
    console.log("You win");
  } else {
    console.log("You Lose");
  }
}

function playGame() {
  playRound(humanSelection, compSelection);
}

playGame();
