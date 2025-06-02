const randomNumber = parseInt(Math.random() * 100) + 1;
const submit = document.getElementById('subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    prevGuess.push(guess);
    if (numGuess > 10) {
        displayGuess(guess);
        displayMessage(` GAME OVER! The number was ${randomNumber}.`);
        endgame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(` Congratulations! You got it right! The number was ${randomNumber}.`);
        endgame();
    } else if (guess < randomNumber) {
        displayMessage(' Too low! Try again.');
    } else {
        displayMessage(' Too high! Try again.');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `Remaining Guesses: ${10 - numGuess + 1}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userInput.disabled = true;
    submit.disabled = true;
    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'Start New Game';
    newGameButton.classList.add('newGame');
    startOver.appendChild(newGameButton);
    newGameButton.addEventListener('click', function () {
        location.reload();
    });
}
