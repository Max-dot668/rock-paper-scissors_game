/*=================================================================================================================================
  JS rock paper scissors game
   programmer: Max You
   Date: 12/10/2024
   Description: Simple rock-paper-scissors created using concepts of variables, data types, strings, and functions in Javascript.
==================================================================================================================================*/

// Create a function to return computer's choice
function getComputerChoice(computerChoice) {
  // get a random number between 0-2
  let randomNumber = Math.floor(Math.random() * 3);

  // conditional statement that will cover all the possible outcomes for the computer's choice
  if (randomNumber === 0) {
    computerChoice = "ROCK!";
  } else if (randomNumber === 1) {
    computerChoice = "PAPER!";
  } else {
    computerChoice = "SCISSORS!";
  }
  return computerChoice;
}

// Create a function to return the players's choice
function getHumanChoice(humanChoice) {
  let play = prompt(`Choose: "r" "p" "s"`);
  let playLowerCase = play.toLowerCase();

  // switch statement that gets the outcome based on player's choice
  switch (playLowerCase) {
    case "r":
      humanChoice = "ROCK!";
      break;
    case "p":
      humanChoice = "PAPER!";
      break;
    case "s":
      humanChoice = "SCISSORS!";
      break;
    default:
      console.log("Error, make sure enter a valid choice");
  }

  return humanChoice;
}

// Creating variable that will store the outcome based on the random number
let computerChoice = " ";
let humanChoice = " ";

// printing the choices to the console
console.log(`player entered: ${getHumanChoice(humanChoice)}`);
console.log(`computer entered: ${getComputerChoice(computerChoice)}`);
