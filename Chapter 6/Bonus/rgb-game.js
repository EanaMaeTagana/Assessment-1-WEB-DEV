var attempts = 3; // The variable that will store the user's attempts.
var score = 0; // The variable that will store the current score of the user.
var correctAnswer; // The variable that will store the user's correct scores.

init(); // Function to initialise the game once the website loads.

function init() {
    // Will display a randomly generated RGB color.
    var colorDisplay = document.getElementById("colorDisplay"); 
    colorDisplay.textContent = generateRandomRGB();

    // Will generate the three color options the user can choose from. 
    var colorOptions = document.getElementById("colorOptions");
    colorOptions.innerHTML = "";

    // Randomly chooses the index of the correct answer.
    correctAnswer = Math.floor(Math.random() * 3);

    // Creates color options and adds event listeners to check for the answer.
    for (var i = 0; i < 3; i++) {
        var colorOption = document.createElement("div");
        colorOption.classList.add("colorOption");
        colorOption.dataset.index = i;
        colorOption.style.backgroundColor = generateRandomRGB();
        colorOption.addEventListener("click", function() {
            checkAnswer(this.dataset.index);
        });
        colorOptions.appendChild(colorOption);
    }
}

// Function to generate a random RGB color.
function generateRandomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function that will check the player's answer.
function checkAnswer(index) {
    if (attempts === 0) { // If there are no attempts left, will do nothing.
        return; 
    }
    if (index == correctAnswer) { // If the answer is correct, will increase the score and show a message saying that the answer is correct.
        score++;
        showMessage("Correct!", "green");
    } else {
        attempts--; // Else, will decrease the amount of attempts and show a message stating that the answer is wrong.
        showMessage("Incorrect!", "red");
        updateLives();
    }
    if (attempts === 0) { // If the attemts equal zero, it will end the game. Else, will begin a new round.
        endGame();
    } else {
        init();
    }
}

// Function to update the display of remaining lives
function updateLives() {
    var livesCount = document.getElementById("livesCount");
    livesCount.textContent = attempts;
}

// Function to display a message on the screen
function showMessage(message, color) {
    var messageDisplay = document.getElementById("message");
    messageDisplay.textContent = message;
    messageDisplay.style.color = color;
}

// Function that will end the game and show the final score
function endGame() {
    var messageDisplay = document.getElementById("message");
    messageDisplay.textContent = "Game Over. Your final score is: " + score;
}

// Function to restart the game and resets all the variables back.
function resetGame() {
    attempts = 3;
    score = 0;
    updateLives();
    init();
    var messageDisplay = document.getElementById("message");
    messageDisplay.textContent = "";
}
