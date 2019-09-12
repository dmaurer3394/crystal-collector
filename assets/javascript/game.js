$(document).ready(function() {
    
    //Declare variables
    var compScore = randomScore(19, 120);
    var userScore = 0;
    var blueVal = 0;
    var greenVal = 0;
    var purpleVal = 0;
    var redVal = 0;
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

    function assignCrystalValues() {
        var arr = []
        while(arr.length < 4){
            var r = randomScore(1,12);
            if(arr.indexOf(r) === -1) arr.push(r);
        }

        blueVal = arr[0];
        greenVal = arr[1];
        purpleVal = arr[2];
        redVal = arr[3];
    }


    function randomScore(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function resetGame() {
        userScore = 0;
        compScore = randomScore(19, 120);
        assignCrystalValues();
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
        $("#blue-text").text("Value: ?");
        $("#green-text").text("Value: ?");
        $("#purple-text").text("Value: ?");
        $("#red-text").text("Value: ?");
    }

    $("#blue-gem").on("click", function() {
        $("#blue-text").text("Value: " + blueVal);
        userScore += blueVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });
    
    $("#green-gem").on("click", function() {
        $("#green-text").text("Value: " + greenVal);
        userScore += greenVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    $("#purple-gem").on("click", function() {
        $("#purple-text").text("Value: " + purpleVal);
        userScore += purpleVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    $("#red-gem").on("click", function() {
        $("#red-text").text("Value: " + redVal);
        userScore += redVal;
        console.log("Player score is now: " + userScore);
        $("#user-score").text(userScore);
        checkWin();
    });

    // textSetup();
    // logScores();
    resetGame();
});