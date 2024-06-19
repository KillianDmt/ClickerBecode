const orange = document.getElementById('orange');

orange.addEventListener('click', () => {
    let oldScore = document.getElementById('score');
    let nivMult = document.getElementById('Multi').classList.contains('nivBonus').innerText;

    let newScore = oldScore + (1 * (2 ** nivMult));

    updateScore(newScore);
    });