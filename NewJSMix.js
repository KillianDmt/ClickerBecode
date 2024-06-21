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
    let nouveauPrix = monNiveau + 10 * monNiveau;

    // Afficher le nouveau prix dans la console
    console.log("Nouveau prix:", nouveauPrix);

    // Mettre à jour le texte du prix affiché dans le HTML
    let quantiteBonusElement = document.querySelector('.quantiteBonusM');
    quantiteBonusElement.textContent = nouveauPrix; 

     score = scoreActu - prixActu;
     updateScore();
 

        
}
else {
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

//By Ronsard Bonus Timed 

let bonusCost = document.querySelector('.quantiteBonusE').innerText;
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