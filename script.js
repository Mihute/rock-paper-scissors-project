// intialize basic variables
const play = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;

// This is the computer play function
function computerPlay(moves) {
  return moves[Math.floor(Math.random() * moves.length)];
}

//A switch statement function that gives the results of the player selection and computer selection moves
function getResult(playerSelection, computerSelection) {
  // This switch using the case statement basically to check and compare the moves
  switch (true) {
    case playerSelection == "rock" && computerSelection == "paper":
      computerScore += 1;
      return ["You lose! Paper beats rock!", "blue"];
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
      playerScore += 1;
      return ["You win! Rock beats scissors!", "red"];
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      computerScore += 1;
      return ["You lose! Scissors beats Paper!", "blue"];
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      playerScore += 1;
      return ["You win! Paper beats Rock!", "red"];
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
      computerScore += 1;
      return ["You lose! Rock beats Scissors!", "blue"];
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      playerScore += 1;
      return ["You win! Scissors beats Paper!", "red"];
      break;
    default:
      playerScore += 1;
      computerScore += 1;
      return [
        `That's a Draw! You have both played ${playerSelection}`,
        "black",
      ];
      break;
  }
}

// This function plays on and stops at round 5
function playRound(playerMove, computerMove = computerPlay(play)) {
  const statusBar = document.querySelector(".status");
  let result = getResult(playerMove, computerMove);
  if (computerScore == 5) {
    document.querySelector(
      ".status"
    ).textContent = `The computer has won by a score of ${computerScore} - ${playerScore}!`;
    document.querySelector(".player-score").textContent = 0;
    document.querySelector(".comp-score").textContent = 0;
    playerScore = 0;
    computerScore = 0;
  } else if (playerScore == 5) {
    document.querySelector(
      ".status"
    ).textContent = `You have won by a score of ${playerScore} - ${computerScore}!`;
    document.querySelector(".player-score").textContent = 0;
    document.querySelector(".comp-score").textContent = 0;
    playerScore = 0;
    computerScore = 0;
  } else {
    if (result[1] == "green") {
      statusBar.textContent = result[0];
      statusBar.style.color = result[1];
    } else {
      statusBar.textContent = result[0];
      statusBar.style.color = result[1];
    }
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".comp-score").textContent = computerScore;
  }
}

// This function wraps the game
function game() {
  play.forEach((move) => {
    document.querySelector(`.${move}`).addEventListener("click", function () {
      playRound(move);
    });
  });
}

game();
