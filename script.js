let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 5;
let score = 0;
let gameOver = false;
let guessInput = document.getElementById("guessInput");

let message = document.getElementById("message");

let attemptsDisplay = document.getElementById("attempts");

let scoreDisplay = document.getElementById("score");

let checkBtn = document.getElementById("checkBtn");

let playAgainBtn = document.getElementById("playAgainBtn");


function checkGuess() {

    if (gameOver) {
        return;
    }

    let guess = Number(guessInput.value);



    if (guessInput.value === "") {

        message.innerText = "Please enter a number!";

        return;
    }



    if (guess < 1 || guess > 20) {

        message.innerText = "Enter a number between 1 and 20!";

        return;
    }



    attempts--;

    attemptsDisplay.innerText = attempts;




    if (guess === secretNumber) {

        message.innerText = "🎉 Correct! You Won!";

        message.className = "win";

        score += attempts + 1;

        scoreDisplay.innerText = score;

        endGame();

    }

    else if (guess > secretNumber) {

        message.innerText = "📈 Too High! Try Again.";

        message.className = "lose";

    }

    else {

        message.innerText = "📉 Too Low! Try Again.";

        message.className = "lose";

    }




    if (attempts === 0 && guess !== secretNumber) {

        message.innerText = "😢 Game Over! Number was " + secretNumber;

        message.className = "lose";

        endGame();

    }



    guessInput.value = "";

}




function endGame() {

    gameOver = true;

    checkBtn.disabled = true;

    checkBtn.style.opacity = "0.5";

    playAgainBtn.style.display = "block";

}




function restartGame() {

    secretNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 5;

    gameOver = false;

    attemptsDisplay.innerText = attempts;

    message.innerText = "Let's start the game!";

    message.className = "";

    guessInput.value = "";

    checkBtn.disabled = false;

    checkBtn.style.opacity = "1";

    playAgainBtn.style.display = "none";

    guessInput.focus();

}