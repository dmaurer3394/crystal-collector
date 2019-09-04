$(document).ready(function() {
    
    //Declare variables
    var compScore = randomScore(19, 120);
    var userScore = 0;
    var blueVal = randomScore(1,12);
    var greenVal = randomScore(1,12);
    var purpleVal = randomScore(1,12);
    var redVal = randomScore(1,12);
    var wins = 0;
    var losses = 0;

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


    function randomScore(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

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

    function textSetup() {
        $("#comp-score").text(compScore);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    $("#blue-gem").on("click", function() {
        userScore += blueVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });
    
    $("#green-gem").on("click", function() {
        userScore += greenVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    $("#purple-gem").on("click", function() {
        userScore += purpleVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    $("#red-gem").on("click", function() {
        userScore += redVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    textSetup();
    logScores();
});