let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = Math.floor(Math.random() * 3);

    console.log(`Computer's Choice ${choices[compChoice]}`);
    return choices[compChoice];
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice');

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const baseUserChoice = getHumanChoice();
    const compChoice = getComputerChoice();

    let scoreStatus = "Draw";

    // Making the user's choice readable for the machine
    const userChoice = baseUserChoice.charAt(0).toUpperCase() + baseUserChoice.slice(1).toLowerCase();

    if (userChoice == compChoice) {
        console.log('Draw');
    } else if (userChoice == 'Rock') {
        if (compChoice == 'Paper') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            scoreStatus = "Computer";
        } else if (compChoice == 'Scissors') {
            console.log('You Win!');
            scoreStatus = "User";
        }
    } else if (userChoice == 'Paper') {
        if (compChoice == 'Scissors') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            scoreStatus = "Computer";
        } else if (compChoice == 'Rock') {
            console.log('You Win!');
            scoreStatus = "User";
        }
    } else if (userChoice == 'Scissors') {
        if (compChoice == 'Rock') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            scoreStatus = "Computer";
        } else if (compChoice == 'Paper') {
            console.log('You Win!');
            scoreStatus = "User";
        }
    }
    return scoreStatus;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const gameResult = playRound();

        if (gameResult == "User") {
            humanScore++;
        } else if (gameResult == "Computer") {
            computerScore++;
        }

        //Debbuging 
        console.log(humanScore, computerScore);
    }

    if (humanScore > computerScore) {
        console.log('You Are The Winner!');
    } else if (humanScore < computerScore) {
        console.log('The Computer Beat You!');
    } else {
        console.log(`It's a Draw!`);
    }
}

playGame();