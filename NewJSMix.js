const orange = document.getElementById("orangeOnClick");

const autoClick = document.getElementById('autoClickBonus');
const scoreDisplay = document.querySelector('#score');

let score = 0;

let prixMult =1;

let interval;

// Click event on Orange by Killian mixed with Ronsard
orange.addEventListener('click', () => {
    let nivMult = parseInt(document.querySelector('.niveauBonusM').innerText);

    score = score + (1 * (2 ** nivMult));
    updateScore();

});
//done


//By Celia Mix with Ronsard

const ButtonMult = document.getElementById('multiplicateurBonus');
ButtonMult.addEventListener('click', function() {
    // Récupérer l'élément qui contient le niveau

    let scoreActu = parseInt(document.getElementById('score').innerText);
    let prixActu = parseInt(document.querySelector('.quantiteBonusM').innerText);

    console.log(prixActu);
    console.log(scoreActu);

    if ( scoreActu >= prixActu) {
        
    let monNiveauElement = document.querySelector('.niveauBonusM'); // Sélectionner le premier élément de la liste
    let monNiveau = parseInt(monNiveauElement.innerText);
    console.log(monNiveau);
    
    if (isNaN(monNiveau)) {
        console.error("Erreur : monNiveau n'est pas un nombre valide.");
        return;
    }
    // Incrémenter le niveau
    let nouveauNiveau = monNiveau + 1; // Pré-incrémentation pour utiliser la nouvelle valeur

    // Afficher le nouveau niveau dans la console
    console.log("Nouveau niveau:", nouveauNiveau);

    // Mettre à jour le texte du niveau affiché dans le HTML
    monNiveauElement.textContent = nouveauNiveau;
/*
   const prixNiveau = [1]; // Commencer avec 1 pour la suite   Ne comprends pas 

// Générer les 100 000 premiers éléments
for (let i = 2; i < 100000; i++) {
    prixNiveau.push(prixNiveau[i - 1] * 2);
}
*/
    let nouveauPrix = 1 + monNiveau + 10 * monNiveau;

    // Afficher le nouveau prix dans la console
    console.log("Nouveau prix:", nouveauPrix);

    // Mettre à jour le texte du prix affiché dans le HTML
    let quantiteBonusElement = document.querySelector('.quantiteBonusM');
    quantiteBonusElement.textContent = nouveauPrix; 

     score = scoreActu - prixActu;
     updateScore();
 

        
}
else {
    alert('Pas assez de points pour acheter un auto-clicker !');
    // fonction changement couleur, css,... 
}


});

//by Ronsard 
function updateScore() {
    scoreDisplay.textContent = score;
}

//by Ronsard how to adapt it ?  ... Miss function updateTimeElapsedDisplay
function startTimer() {
    interval = setInterval(() => {
        timeElapsed++;
        updateTimeElapsedDisplay();
    }, 0);
}

// let mix auto Click from Killian and Ronsard

const autoClickerButton = document.getElementById('autoclicker-button');
let nivAuto = parseInt(document.querySelector(".niveauBonusA").innerText);
let prixAuto = parseInt(document.querySelector(".quantiteBonusA").innerText);
autoClickerButton.addEventListener('click', () => {
    if (score >= prixAuto) {
        score -= prixAuto;
        updateScore();

        nivAuto ++;
        document.querySelector(".niveauBonusA").innerText = nivAuto;
        let nouveauPrix = 1 + nivAuto + 10 * nivAuto;

        let quantiteBonusElement = document.querySelector('.quantiteBonusA');
    
        quantiteBonusElement.textContent = nouveauPrix; 
    
        setInterval(() => {
            score += nivAuto;
            updateScore();
        }, 1000);
    } else {
        alert('Pas assez de points pour acheter un auto-clicker !');
    }
});

//By Ronsard Bonus Timed 

let bonusCost = document.querySelector('.quantiteBonusE').innerText;
const bonusButton = document.getElementById('bonus-button');

bonusButton.addEventListener('click', () => {
    if (score >= bonusCost) {
        score -= bonusCost;
        updateScore();
        let originalMultiplier = nivMult;
        bonusButton.disabled = true;

        setTimeout(() => {
            nivMult = originalMultiplier * 2;
            bonusButton.disabled = false;
        }, 30000);
        nivMult = originalMultiplier;
    } else {
        alert('Pas assez de points pour acheter un bonus !');
    }
});