// const rps = ["rock", "paper", "scissors"];
// rock = 0
// paper = 1
// scissors = 2

let humanScore = 0;
let comScore = 0;

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
  return user, userChoice;
};

// const playRound = (humanChoice, comChoice) => {
//   if (humanChoice === "rock" && comChoice === 2) {
//     console.log("Your choice", humanChoice);
//     console.log("Enemy choice scissors");
//     console.log("You win");
//   } else if (humanChoice === "scissors" && comChoice === 1) {
//     console.log("Your choice", humanChoice);
//     console.log("Enemy choice rock");
//     console.log("You win");
//   } else if (humanChoice === "paper" && comChoice === 0) {
//     console.log("Your choice", humanChoice);
//     console.log("Enemy choice paper");
//     console.log("You win");
//   } else {
//     if()
//     console.log("Your choice", humanChoice);
//     console.log("Enemy choice", comChoice);
//     console.log("You lose");
//   }
// };
const humanSelection = getUserChoice();
const comSelection = getComputerChoice();
// console.log(getUserChoice());
// console.log(getComputerChoice());
// console.log(playRound(humanSelection, comSelection));
