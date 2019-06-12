let total = 0;
let label = document.getElementById("label")
let totalScore = document.getElementById("score");




function diceRoll() {

    label.innerHTML = "your current score"

    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice)

    if (dice == 1) {
        document.getElementById("diceImg").src = "./img/dice1.png";
        total = 0
    } else if (dice == 2) {
        document.getElementById('diceImg').src = "./img/dice2.png";
        total += 2
    } else if (dice == 3) {
        document.getElementById('diceImg').src = "./img/dice3.png";
        total += 3
    } else if (dice == 4) {
        document.getElementById('diceImg').src = "./img/dice4.png";
        total += 4
    } else if (dice == 5) {
        document.getElementById('diceImg').src = "./img/dice5.png";
        total += 5
    } else if (dice == 6) {
        document.getElementById('diceImg').src = "./img/dice6.png";
        total += 6
    }
    totalScore.innerHTML = total;

    if (total >= 21) {
        label.innerHTML = "you win";
        total = 0;
    } else if (total == 0) {
        label.innerHTML = "you lost";
    }


}