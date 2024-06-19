const orange = document.getElementById('orange');

orange.addEventListener('click', () => {
    let oldScore = document.getElementById('score');
    let nivMult = document.getElementById('multiplicateurBonus').classList.contains('niveauBonus').innerText;

    let newScore = oldScore + (1 * (2 ** nivMult));

    updateScore(newScore);
    });