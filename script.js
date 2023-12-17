// Variables

const playerChoiceBtn = document.querySelectorAll(".choice-btn");
const scoreContainer = document.querySelector(".score-container");
const roundMessage = document.createElement("p");
roundMessage.classList.add("score-round-result")
scoreContainer.insertBefore(roundMessage, scoreContainer.firstChild);

const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;



// Computer choice

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerChoice;
    let randomNumber = getRandomNumber();
    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("Error while generating the computer choice!");
    }
    return computerChoice;
}

// Messages

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function winMessage(playerChoice, computerChoice) {
    return `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
}

function loseMessage(playerChoice, computerChoice) {
    return `You Lose! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
}

function tieMessage() {
    return "Tie!";
}

// Player choice


playerChoiceBtn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.getAttribute("id"));    
    });
}); 

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;
    switch(playerChoice) {
        case "rock":
            if (computerChoice == "rock") {
                result = tieMessage();
            } else if (computerChoice == "paper") {
                result = loseMessage(playerChoice, computerChoice);
                computerScore++;
            } else {
                result = winMessage(playerChoice, computerChoice);
                playerScore++;
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                result = winMessage(playerChoice, computerChoice);
                playerScore++;
            } else if (computerChoice == "paper") {
                result = tieMessage();
            } else {
                result = loseMessage(playerChoice, computerChoice);
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                result = loseMessage(playerChoice, computerChoice);
                computerScore++;
            } else if (computerChoice == "paper") {
                result = winMessage(playerChoice, computerChoice);
                playerScore++;
            } else {
                result = tieMessage();
            }
            break;
        default:
            result = "Something went wrong!";
            
    }
    roundMessage.innerText = result;
    updateScore(playerScore, computerScore)
}

function updateScore(playerScore, computerScore) {
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
}


