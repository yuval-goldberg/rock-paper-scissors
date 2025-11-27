let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = Math.floor(Math.random() * 3);

    console.log(compChoice);
    return choices[compChoice];
}

console.log(getComputerChoice());
