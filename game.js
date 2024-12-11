/*=================================================================================================================================
   program: JS Rock Paper Scissors Game
   programmer: Max You
   Date: 12/10/2024
   Description: Simple rock-paper-scissors created using concepts of variables, data types, strings, and functions in Javascript.
==================================================================================================================================*/

// Global variables that will keep track of the scores
let humanScore = 0;
let computerScore = 0;

//============================================================================= function declarations ===============================================================================================

// Create a function to return computer's choice
function getComputerChoice() {
  // variable that stores the outcome to return
  let computerChoice = " ";

  // get a random number between 0-2
  let randomNumber = Math.floor(Math.random() * 3);

  // conditional statement that will cover all the possible outcomes for the computer's choice
  if (randomNumber === 0) {
    computerChoice = "ROCK";
  } else if (randomNumber === 1) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  console.log(`computer: ${computerChoice}`);
  return computerChoice;
}

// Create a function to return the players's choice
function getHumanChoice() {
  // variable that stores the outcome to return
  let humanChoice = "";

  // prompt and make the choice case insensitive so the program accepts different variations of the same response
  let play = prompt(`Choose: "Rock" "Paper" "Scissors"`);
  let playLowerCase = play.toLowerCase();

  // switch statement that gets the outcome based on player's choice
  switch (playLowerCase) {
    case "rock":
      humanChoice = "ROCK";
      break;
    case "paper":
      humanChoice = "PAPER";
      break;
    case "scissors":
      humanChoice = "SCISSORS";
      break;
    default:
      throw new Error(`Huh? "${play}" is not a valid choice. Try again.`);
  }
  console.log(`player: ${humanChoice}`);
  return humanChoice;
}

// Create a function to play a single round
function playRound(humanChoice, computerChoice) {
  // conditional statement for logic of the game
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("+1 for player");
    humanScore++;
    console.log("=====================================");
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    console.log("+1 for computer");
    computerScore++;
    console.log("=====================================");
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("+1 for player");
    humanScore++;
    console.log("=====================================");
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    console.log("+1 for computer");
    computerScore++;
    console.log("=====================================");
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    console.log("+1 for computer");
    computerScore++;
    console.log("=====================================");
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("+1 for player");
    humanScore++;
    console.log("=====================================");
  } else {
    console.log("Draw");
    console.log("=====================================");
  }
}

// Create a function that will play a total of 5 rounds
function playGame() {
  // create variables to store returned strings to improve code readability
  // first round
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // second round
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // third round
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // fourth round
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // fifth round
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

//============================================================================= main program game ==================================================================================================

// play the game
let game = playGame();

// print results
console.log("====================== RESULTS ======================");
console.log(`Player Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

// decide a winner
console.log("====================== FINAL VEREDICT ====================== ");
if (humanScore > computerScore) {
  console.log("YOU WON!");
} else if (humanScore < computerScore) {
  console.log("You lost");
} else {
  console.log("It's a tie!");
}
