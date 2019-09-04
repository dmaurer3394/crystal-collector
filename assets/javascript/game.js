$(document).ready(function() {
    
    // Declare variables
    var compScore = randomScore(19, 120);
    var userScore = 0;
    var blueVal = randomScore(1,12);
    var greenVal = randomScore(1,12);
    var purpleVal = randomScore(1,12);
    var redVal = randomScore(1,12);
    var wins = 0;
    var losses = 0;

    // Logs all variables to the console
    function logScores() {
    console.log("--------------------");
    console.log("Score: " + compScore);
    console.log("Blue: " + blueVal);
    console.log("Green: " + greenVal);
    console.log("Purple: " + purpleVal);
    console.log("Red: " + redVal);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    }

    // Function that creates a random value between two given numbers
    function randomScore(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Resets score and all random values
    function resetGame() {
        userScore = 0;
        compScore = randomScore(19, 120);
        blueVal = randomScore(1,12);
        greenVal = randomScore(1,12);
        purpleVal = randomScore(1,12);
        redVal = randomScore(1,12);
        textSetup();
        logScores();
    }

    // Checks for a win or lose, updates the win or lose variable, and resets the game
    function checkWin() {
        if (userScore > compScore) {
            alert("You lose!");
            losses++;
            resetGame();
        }

        if (userScore === compScore) {
            alert("You win!");
            wins++;
            resetGame();
        }
    }

    // Initial text setup for the page
    function textSetup() {
        $("#comp-score").text(compScore);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#blue-gem-value").text("?");
        $("#green-gem-value").text("?");
        $("#purple-gem-value").text("?");
        $("#red-gem-value").text("?");
    }

    // Blue gem on-click
    $("#blue-gem").on("click", function() {
        $("#blue-gem-value").text(blueVal);
        userScore += blueVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });
    
    // Green gem on-click
    $("#green-gem").on("click", function() {
        $("#green-gem-value").text(greenVal);
        userScore += greenVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    // Purple gem on-click
    $("#purple-gem").on("click", function() {
        $("#purple-gem-value").text(purpleVal);
        userScore += purpleVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    // Red gem on-click
    $("#red-gem").on("click", function() {
        $("#red-gem-value").text(redVal);
        userScore += redVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    textSetup();
    logScores();
});