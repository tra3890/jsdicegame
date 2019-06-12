// button.addEventListener("click") {}

function diceRoll() {

    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice)

    if (dice == 1) {
        document.getElementById("diceImg").src = "./img/dice1.png";
        score = 0
    } else if (dice == 2) {
        document.getElementById('diceImg').src = "./img/dice2.png";
        score += 2
    } else if (dice == 3) {
        document.getElementById('diceImg').src = "./img/dice3.png";
        score += 3
    } else if (dice == 4) {
        document.getElementById('diceImg').src = "./img/dice4.png";
        score += 4
    } else if (dice == 5) {
        document.getElementById('diceImg').src = "./img/dice5.png";
        score += 5
    } else if (dice == 6) {
        document.getElementById('diceImg').src = "./img/dice6.png";
        score += 6
    }

}

if (score > 19) {

    ("you win")
}