document.addEventListener('DOMContentLoaded', () => {
    // Éléments DOM
    const scoreElem = document.getElementById('score');
    const clickPerSecondElem = document.getElementById('clickPerSecond');
    const timerElem = document.getElementById('counterBoost');
    const orangeOnClick = document.getElementById('orangeOnClick');
    const autoClickButton = document.getElementById('autoClickBonus');
    const boostButton = document.getElementById('boostBonus');
    const niveauBonusMElem = document.querySelector('.niveauBonusM');
    const quantiteBonusMElem = document.querySelector('.quantiteBonusM');
    const niveauBonusAElem = document.querySelector('.niveauBonusA');
    const quantiteBonusAElem = document.querySelector('.quantiteBonusA');
    const niveauBonusEElem = document.querySelector('.niveauBonusE');
    const quantiteBonusEElem = document.querySelector('.quantiteBonusE');

    // Bonus multiplicateur au premier clic
    niveauBonusMElem.textContent = 0; // Définition du niveau à 1 dès le départ  Pourquoi ? 1 * (2 ** nivMult) si niv 1 direct a 2
    console.log(niveauBonusMElem);
    quantiteBonusMElem.textContent = 1 + 1 + 10 * 1; // Calcul du prix initial

    // Variables globales

    let nivMult = parseInt(niveauBonusMElem.textContent);
    console.log (nivMult);
    let cookies = 0;
    let cookiesPerSecond = 0;
    let cookiesPerClick = 1;
    console.log(cookiesPerClick);
    let autoClickLevel = 0;
    let boostLevel = 0;
    let boostCost = 100;
    let boostActive = false;
    const autoClickPrices = [
        1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
        10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
    ];



    // Fonction pour mettre à jour l'affichage
    function updateDisplay() {
        scoreElem.textContent = cookies;
        clickPerSecondElem.textContent = cookiesPerSecond;
        niveauBonusAElem.textContent = autoClickLevel;
        quantiteBonusAElem.textContent = autoClickPrices[autoClickLevel];
        niveauBonusEElem.textContent = boostLevel;
        quantiteBonusEElem.textContent = boostCost;
    }

    // Fonction pour incrémenter les cookies
    function incrementCookies(amount) {
        cookies += amount;
        updateDisplay();
    }

    // Fonction pour démarrer le boost

    function startBoost() {
        if (boostActive || cookies <= boostCost) return;

        boostActive = true;
        cookies -= boostCost;
        cookiesPerSecond *= 2;
        cookiesPerClick *= 2;
        updateDisplay();

        let boostTimeLeft = 30;
        const boostInterval = setInterval(() => {
            boostTimeLeft--;
            timerElem.textContent = `Time: ${boostTimeLeft}s`;

            if (boostTimeLeft <= 0) {
                clearInterval(boostInterval);
                endBoost();
            }
        }, 1000);
    }

    // Fonction pour terminer le boost
    function endBoost() {
        niveauBonusEElem.textContent = boostLevel++;
        boostActive = false;
        cookiesPerSecond /= 2;
        cookiesPerClick /= 2;
        timerElem.textContent = '';
        updateDisplay();
    }

    // Fonction pour mettre à jour le boost
    function upgradeBoost() {
        if (cookies <= boostCost) return;
        cookies -= boostCost;
        // boostLevel++;
        boostCost = Math.floor(boostCost * 2);
        updateDisplay();
    }

    // Fonction pour améliorer l'auto-clic
    function upgradeAutoClick() {
        let prixActu = autoClickPrices[autoClickLevel];
        if (cookies < prixActu) return;

        cookies -= prixActu;
        autoClickLevel++;
        cookiesPerSecond++;
        updateDisplay();
    }

    // Fonction pour gérer l'auto-clic automatique
    function autoclick() {
        setInterval(() => {
            incrementCookies(cookiesPerSecond);
        }, 1000);
    }

    // Fonction pour gérer le multiplicateur de bonus
    function upgradeMultiplicateurBonus() {
        let scoreActu = parseInt(scoreElem.textContent);
        let prixActu = parseInt(quantiteBonusMElem.textContent);

        if (scoreActu >= prixActu) {
            let monNiveau = parseInt(niveauBonusMElem.textContent);
            let nouveauNiveau = monNiveau + 1;
            let nouveauPrix = 1 + nouveauNiveau + 10 * nouveauNiveau;

            nivMult = nouveauNiveau;
            niveauBonusMElem.textContent = nouveauNiveau;
            quantiteBonusMElem.textContent = nouveauPrix;

            cookies -= prixActu;
            updateDisplay();
        } else {
            alert('Pas assez de points pour acheter un multiplicateur !');
        }
    }

    // Événements

    // Clic sur l'orange pour incrémenter manuellement les cookies
    orangeOnClick.addEventListener('click', () => {
        cookiesPerClick = 1 * (2 ** nivMult);
        incrementCookies(cookiesPerClick)
    });

    // Clic sur le bouton pour améliorer l'auto-clic
    autoClickButton.addEventListener('click', upgradeAutoClick);

    // Clic sur le bouton pour démarrer le boost et l'améliorer
    boostButton.addEventListener('click', () => {
       
        startBoost();
        upgradeBoost();
        updateDisplay();
        
    });

    // Clic sur le bouton pour améliorer le multiplicateur de bonus
    multiplicateurBonus.addEventListener('click', upgradeMultiplicateurBonus);


    // Megajuicer au premier clic
    niveauBonusEElem.textContent = 1 + 1; // Définition du niveau à 1 dès le départ

    // Initialisation
    autoclick();
    updateDisplay();
});
