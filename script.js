const orange = document.getElementById('orangeOnClick');
let oldScore = 0;
orange.addEventListener('click', () => {
    let oldScore = document.getElementById('score');
    let nivMult = document.getElementById('bonus-button').classList.contains('niveauBonus').innerHTML;

    let newScore = oldScore + (1 * (2 ** nivMult));
    oldScore.innerHTML = newScore;

})

let score = 0;
let multiplier = 1;
let multiplierCost = 10;
let timeElapsed = 0;
let interval;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('orangeOnClick');
const multiplierButton = document.getElementById('multiplierButton');
const timeElapsedDisplay = document.getElementById('time-elapsed');

clickButton.addEventListener('click', () => {
    score += multiplier;
    updateScore();
});

multiplierButton.addEventListener('click', () => {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 2;
        updateScore();
        updateMultiplierButton();
    } else {
        alert('Pas assez de points pour acheter un multiplicateur !');
    }
});

function updateScore() {
    scoreDisplay.textContent = score;
}

function updateMultiplierButton() {
    multiplierButton.textContent = `Acheter Multiplicateur x${multiplier} (${multiplierCost} points)`;
}



function startTimer() {
    interval = setInterval(() => {
        timeElapsed++;
        updateTimeElapsedDisplay();
    }, 0);
}

let autoClickerCost = 50;
const autoClickerButton = document.getElementById('autoclicker-button');

autoClickerButton.addEventListener('click', () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        updateScore();
        setInterval(() => {
            score += multiplier;
            updateScore();
        }, 1000);
        autoClickerButton.disabled = true;
    } else {
        alert('Pas assez de points pour acheter un auto-clicker !');
    }
});

let bonusCost = 100;
const bonusButton = document.getElementById('bonus-button');

bonusButton.addEventListener('click', () => {
    if (score >= bonusCost) {
        score -= bonusCost;
        updateScore();
        let originalMultiplier = multiplier;
        multiplier *= 2;
        updateMultiplierButton();
        bonusButton.disabled = true;

        setTimeout(() => {
            multiplier = originalMultiplier;
            updateMultiplierButton();
            bonusButton.disabled = false;
        }, 30000);
    } else {
        alert('Pas assez de points pour acheter un bonus !');
    }
});