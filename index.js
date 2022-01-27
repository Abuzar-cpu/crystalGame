let totalScore = 0;

let wins = 0;
let loses = 0;

crystals = $("button");

goalScore = Math.ceil(Math.random()*100);
$("#goal-score").text(goalScore);

powers = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];

for (const button of crystals) {
    $(button).attr("data-power", Math.ceil(Math.random()*10));
}

calcScore = (element) =>
{
    let temp = totalScore;
    totalScore += parseInt($(element).data("power"));
    if(checkIfGameOver() === 0)
    {
        alert("You won");
        totalScore = temp;
        updateScore(goalScore);
        return;
    }

    else if(checkIfGameOver() === 1)
    {
        alert("You lost");
        return;
    }
    updateScore(totalScore);

}

updateScore = (score) =>
{
    $("#user-score").text(score);
}

checkIfGameOver = () =>
{
    if(totalScore === goalScore)
    {
        return 0; // Means User won the game
    }

    else if(totalScore < goalScore)
    {
        return -1; // Means the game should continue
    }

    return 1; // Means User lost the game
}