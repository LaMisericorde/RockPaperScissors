function getPlayerChoice() {
    return prompt("Write your choice: ").toLowerCase();
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerSelection;
    let randomNumber = generateRandomNumber();
    switch(randomNumber) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        default:
            computerSelection = "scissors";
            break;

    }
    return computerSelection;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function winMessage(playerSelection, computerSelection) {
    return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
}

function loseMessage(playerSelection, computerSelection) {
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
}

function tieMessage() {
    return "Tie!";
}

function playSingleRound(playerSelection, computerSelection) {
    let result;
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                result = tieMessage();
            } else if (computerSelection == "paper") {
                result = loseMessage(playerSelection, computerSelection);
            } else {
                result = winMessage(playerSelection, computerSelection);
            }
            break;
        case "paper":
            if (computerSelection == "rock") {
                result = winMessage(playerSelection, computerSelection);
            } else if (computerSelection == "paper") {
                result = tieMessage();
            } else {
                result = loseMessage(playerSelection, computerSelection);
            }
            break;
        case "scissors":
            if (computerSelection == "rock") {
                result = loseMessage(playerSelection, computerSelection);
            } else if (computerSelection == "paper") {
                result = winMessage(playerSelection, computerSelection);
            } else {
                result = tieMessage();
            }
            break;
        default:
            result = "Ups Something went wrong";
    }
    return result;
}

function transformTextToValueResult(textResult) {
    let valueResult;
    if (textResult.includes("Win"))
    {
        valueResult = 0;
    } else if (textResult.includes("Lose")) {
        valueResult = 1;
    } else {
        valueResult = 2;
    }
    return valueResult;
}

function displayScore(playerScore, computerScore) {
    return `${playerScore} - ${computerScore}`;
}

function game() {
    let roundMessage;
    let roundScore;
    let playerScore = 0;
    let computerScore = 0;
    let isGameOver = false;

    console.log(displayScore(playerScore, computerScore))
    for (let gameRound = 1; gameRound <= 5; gameRound++) {
        
        roundMessage = playSingleRound(getPlayerChoice(), getComputerChoice());
        roundScore = transformTextToValueResult(roundMessage);
        console.log(roundMessage);
        
        switch(roundScore) {
            case 0:
                playerScore++;
                break;
            case 1:
                computerScore++;
                break;
            case 2:
                gameRound--;
                break;
            default:
                console.log("Error");
        }
        console.log(displayScore(playerScore, computerScore));

        if (playerScore == 3) {
            console.log("You won!");
            isGameOver = true;
        } else if (computerScore == 3) {
            console.log("You lost!");
            isGameOver = true;
        }

        if (isGameOver) {
            break;
        }
    }
}

game();


