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

    let userIsWinning = true;

    // Making the user's choice readable for the machine
    const userChoice = baseUserChoice.charAt(0).toUpperCase() + baseUserChoice.slice(1).toLowerCase();

    if (userChoice == compChoice) {
        console.log('Draw');
    } else if (userChoice == 'Rock') {
        if (compChoice == 'Paper') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            computerScore++;

            userIsWinning = false;
        } else if (compChoice == 'Scissors') {
            console.log('You Win!');
            humanScore++;
        }
    } else if (userChoice == 'Paper') {
        if (compChoice == 'Scissors') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            computerScore++;

            userIsWinning = false;
        } else if (compChoice == 'Rock') {
            console.log('You Win!');
            humanScore++;
        }
    } else if (userChoice == 'Scissors') {
        if (compChoice == 'Rock') {
            console.log(`You lose! ${compChoice} beats ${userChoice}`);
            computerScore++;

            userIsWinning = false;
        } else if (compChoice == 'Paper') {
            console.log('You Win!');
            humanScore++;
        }
    }

    return userIsWinning;
}