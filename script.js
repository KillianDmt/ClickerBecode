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
    let prixActu = parseInt(document.querySelector('#autoClickBonus .quantiteBonus').innerText);
    let nivActu = parseInt(document.querySelector('#autoClickBonus .niveauBonusA').innerText);
    let parSec = parseInt(document.getElementById('clickPerSecond').innerText);
    let scoreActu = parseInt(document.getElementById('score').innerText);
    console.log(nivActu)
    if (scoreActu >= prixActu) {
        nivActu ++;
        document.querySelector('#autoClickBonus .niveauBonusA').innerText = nivActu;
        console.log(nivActu);

        scoreActu -= prixActu;
        document.getElementById('score').innerText = scoreActu;

        parSec += nivActu;
        document.getElementById('clickPerSecond').innerText = parSec;
        console.log(parSec);

        prixActu = autoPrix[nivActu];
        document.querySelector('#autoClickBonus .quantiteBonus').innerText = prixActu;

    } 
    else {
        /*Change CSS Red*/ 
    }
   
});

function autoclick() {
    /*let nivAuto = document.getElementById('autoClickBonus').classList.contains('niveauBonus').innerText;*/
    var parSec = parseInt(document.getElementById('clickPerSecond').innerText);

    var oldScore = parseInt(document.getElementById('score').innerText);
    console.log(parSec);

    if (parSec != 0) {
    var newScore = oldScore + parSec;
    console.log(newScore); 
    window.setInterval(updateScore,1000,newScore);
    }
}


autoclick();
