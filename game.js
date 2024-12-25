/*=================================================================================================================================
   program: JS Rock Paper Scissors Game
   programmer: Max You
   Date: 12/10/2024
   Description: Simple rock-paper-scissors created using concepts of DOM manipulation, variables, data types, strings, and functions in Javascript.
==================================================================================================================================*/

// Global variables that will keep track of the scores
let humanScore = 0;
let computerScore = 0;

// Global variable that checks whether game has finished
let gameEnded = false;

//============================================================================= function declarations ===============================================================================================

// Create a function to return computer's choice
function getComputerChoice() {
  // variable that stores the outcome to return
  let computerChoice = "";

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
  const gameContent = document.querySelector('.game-content');
  const computerSelection = document.createElement("div");
  computerSelection.classList.add("computerSelection");
  computerSelection.textContent = `computer: ${computerChoice}`;
    gameContent.appendChild(computerSelection);
  return computerChoice;
}

// Create a function that handles the logic of the game
function playRound(humanChoice, computerChoice) {
    const gameContent = document.querySelector('.game-content');  
    
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        humanScore++;
        outcome.textContent = `+1 player\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        computerScore++;
        outcome.textContent = `+1 computer\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        humanScore++;
        outcome.textContent = `+1 player\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        computerScore++;
        outcome.textContent = `+1 computer\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        computerScore++;
        outcome.textContent = `+1 computer\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        humanScore++;
        outcome.textContent = `+1 player\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    } else {
        const outcome = document.createElement("div");
        outcome.classList.add("outcome");
        outcome.textContent = `Draw\nPlayer Score: ${humanScore}\nComputer Score: ${computerScore}\n=====================================`;
        gameContent.appendChild(outcome);
    }
}

// Create a function that will play a total of 5 rounds
function playGame() {
    const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (gameEnded) {
        return;
      }
      
      if (humanScore === 5 || computerScore === 5) {
        let results = printResults();
          const resultContainer = document.querySelector("#result-container");
        const div = document.createElement("div");
        div.classList.add("result");
        div.textContent = results;
        resultContainer.appendChild(div);
        gameEnded = true;
        buttons.forEach(btn => btn.disabled = true);
        return;
      }
      else {
         const gameContent = document.querySelector('.game-content');
  const humanSelection = document.createElement("div");
  humanSelection.classList.add("humanSelection");
  humanSelection.textContent = `player: ${button.id}`;
          gameContent.appendChild(humanSelection);
          playRound(button.id, getComputerChoice());
      }
    })
  });
}

// create a function that will print the results
function printResults() {
    // print results in console
    console.log("====================== RESULTS ======================");
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    // decide a winner and return the result message
    console.log("====================== FINAL VEREDICT ====================== ");
    if (humanScore > computerScore) {
        console.log("YOU WON!");
        return `Final Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}\n\nYOU WON!`;
    } else if (humanScore < computerScore) {
        console.log("You lost");
      return `Final Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}\n\nYou Lost!`;
    }
}

    //============================================================================= main program game ==================================================================================================

    // play the game
    playGame();

