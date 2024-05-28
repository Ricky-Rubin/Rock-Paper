function getComputerOption() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (player === "Rock" && computer === "Scissors" ||
            player === "Scissors" && computer === "Paper" ||
            player === "Paper" && computer === "Rock");
}

function getRoundResults(playerChoice) {
    const computerChoice = getComputerOption();
    if (hasPlayerWonTheRound(playerChoice, computerChoice)) {
        playerScore++;
        return `Player wins! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === computerChoice) {
        return `It's a tie! Both chose ${playerChoice}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}

const playerScoreUpdate = document.getElementById("player_score");
const computerScoreUpdate = document.getElementById("computer_score");
const resultMsgUpdate = document.getElementById("resultmsg");
const finalMsgUpdate = document.getElementById("finalmsg");
const lastButton = document.getElementById("lst_btn");
const optionsTab = document.getElementById("options");

function giveResults(playerChoice) {
    resultMsgUpdate.innerText = getRoundResults(playerChoice);
    playerScoreUpdate.innerText = playerScore;
    computerScoreUpdate.innerText = computerScore;
    
    if (playerScore === 3 || computerScore === 3) {
        resultMsgUpdate = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;
    }

    lastButton.style.display = "block";
    optionsTab.style.display = "none";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultMsgUpdate.innerText = "";
    finalMsgUpdate.innerText = "";
    optionsTab.style.display = "block";
    lastButton.style.display = "none";
    playerScoreUpdate.innerText = "0";
    computerScoreUpdate.innerText = "0";
}

lastButton.addEventListener("click", resetGame);

const rockButton = document.getElementById("rockbtn");
const paperButton = document.getElementById("paperbtn");
const scissorsButton = document.getElementById("scissorsbtn");

rockButton.addEventListener("click", function () {
    giveResults("Rock")
});

paperButton.addEventListener("click", function () {
    giveResults("Paper")
});

scissorsButton.addEventListener("click", function () {
    giveResults("Scissors");
})