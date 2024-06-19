const orange = document.getElementById("orangeOnClick");

const auto = document.getElementById('autoClickBonus');
const autoPrix = [
    1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
    10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
]

orange.addEventListener("click", () => {
    let oldScore = parseInt(document.getElementById("score").innerText);
    let nivMult = parseInt(document.querySelector(".niveauBonusM").innerText);
console.log (nivMult);
console.log (oldScore);
    let newScore = oldScore + (1 * (2 ** nivMult));
    console.log(newScore);
    updateScore(newScore);
    });

function updateScore(newScore) {
    score = newScore;
    document.getElementById('score').innerText = score;
}

auto.addEventListener('click',() => {
    const prixActu = document.getElementById('autoClickBonus').classList.contains('quantiteBonus').innerText;
    const nivActu = document.getElementById('autoClickBonus').classList.contains('niveauBonus').innerText;

    const scoreActu = document.getElementById('score').innerText;

    if (scoreActu >= prixActu) {
        nivActu ++;
        document.getElementById('autoClickBonus').classList.contains('niveauBonus').innerText = nivActu;

        scoreActu -= prixActu;
        document.getElementById('autoClickBonus').classList.contains('quantiteBonus').innerText = scoreActu;

        prixActu = tableauAuto[nivActu];
    } 
    else {
        /*Change CSS Red*/ 
    }
   
});

function autoclick() {
    let nivAuto = document.getElementById('autoClickBonus').classList.contains('niveauBonus').innerText;
    let parSec = document.getElementById('clickPerSecond').innerText;
}


autoClick();