// Referncing DOM elements
// Buttons
const optionBtn = document.querySelectorAll('.option-btn')
const playBtn = document.querySelector('.play-btn')

// Score text
const userScoreText = document.getElementById('user-score')
const computerScoreText = document.getElementById('computer-score')
const subTitle = document.querySelector('.sub-title')

// Defining scores
let userScore = 0
let computerScore = 0

let baseUserChoice = null

// Get computer choice by random number
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let compChoice = Math.floor(Math.random() * 3)

    console.log(`Computer's Choice ${choices[compChoice]}`)
    return choices[compChoice]
}

// Applying for each of the option buttons the event handler of getting the user's choice
optionBtn.forEach(function getHumanChoice(element) {
    element.addEventListener('click', (event) => {
        baseUserChoice = element.id
        subTitle.textContent = `${baseUserChoice.toUpperCase()} Locked!`
    })
})

// Play round function that returns who won on this particular round
function playRound() {

    const userChoice = baseUserChoice;
    const compChoice = getComputerChoice();

    if (userChoice === null) {
        alert('Choose one of the options!')
    } else if ((userChoice === 'rock' && compChoice === 'paper' ||
        userChoice === 'paper' && compChoice === 'scissors' ||
        userChoice === 'scissors' && compChoice === 'rock')) {

        computerScore++
        computerScoreText.textContent = computerScore
        alert(`You lose! ${compChoice} beat ${userChoice}`)

    } else if (userChoice === compChoice) {
        alert(`Draw! The computer chose ${compChoice}`)
    } else {
        userScore++
        userScoreText.textContent = userScore
        alert(`You Win! ${userChoice} beat ${compChoice}`)
    }

    if (userScore >= 5 || computerScore >= 5) {
        if (userScore > computerScore) {
            subTitle.textContent = 'You Win!'
        } else {
            subTitle.textContent = 'You Lose!'
        }
        playBtn.disabled = true
        playBtn.classList.toggle('disabled')
        playBtn.textContent = 'GAME OVER'
    }
}

// Play button -> play round
playBtn.addEventListener('click', playRound)