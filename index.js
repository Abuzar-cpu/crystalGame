//@ts-check

let totalScore = 0;

let wins = window.sessionStorage.getItem("wins") == undefined ? 0 : parseInt(window.sessionStorage.getItem("wins"));
let loses = window.sessionStorage.getItem("loses") == undefined ? 0 : parseInt(window.sessionStorage.getItem("loses"));
let gameEnded = false;

$("#wins").text("Wins: " + wins);
$("#loses").text("Lose: " + loses);

let crystals = $("button");

let goalScore = Math.ceil(Math.random()*100);
$("#goal-score").text(goalScore);

let powers = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];

for (const button of crystals) {
    $(button).attr("data-power", Math.ceil(Math.random()*10));
}

let calcScore = crystal => {
    if (gameEnded)
    {
        alert("Game has ended. Please restart to play again");
        return;
    }
    totalScore += $(crystal).data("power");
    if(totalScore < goalScore)
    {
    }
    else if (totalScore == goalScore)
    {
        alert("You won");
        wins++;
        window.sessionStorage.setItem("wins", wins.toString());
        gameEnded = true;
    }
    else{
        alert("You lost");
        loses++;
        window.sessionStorage.setItem("loses", loses.toString());
        gameEnded = true;
    }
    $("#user-score").text(totalScore);
}