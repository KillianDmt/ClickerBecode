document.getElementById('multiplicateurBonus').addEventListener('click', function() {
    // Récupérer l'élément qui contient le niveau

    let scoreActu = parseInt(document.getElementById('score').innerText);
    let prixActu = parseInt(document.querySelector('#multiplicateurBonus .quantiteBonus').innerText);

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
    let nouveauNiveau = monNiveau++; // Pré-incrémentation pour utiliser la nouvelle valeur

    // Afficher le nouveau niveau dans la console
    console.log("Nouveau niveau:", nouveauNiveau);

    // Mettre à jour le texte du niveau affiché dans le HTML
    monNiveauElement.textContent = nouveauNiveau;

   const prixNiveau = [1]; // Commencer avec 1 pour la suite

// Générer les 100 000 premiers éléments
for (let i = 1; i < 100000; i++) {
    prixNiveau.push(prixNiveau[i - 1] * 2);
}

    let nouveauPrix = prixNiveau[nouveauNiveau - 1]; // -1 car les tableaux commencent à l'indice 0

    // Afficher le nouveau prix dans la console
    console.log("Nouveau prix:", nouveauPrix);

    // Mettre à jour le texte du prix affiché dans le HTML
    let quantiteBonusElement = document.getElementsByClassName('quantiteBonus');
    quantiteBonusElement.textContent = nouveauPrix.toString(); 

     let scoreNouveau = scoreActu - prixActu;
      document.getElementById('score').innerText = scoreNouveau;
 

        
}
else {

}


});





/*

document.getElementById('next-button').addEventListener('click', function() {
    // 1. Obtenez la valeur actuelle du niveau
    let currentLevelElement = document.getElementById('current-level');
    let currentLevel = parseInt(currentLevelElement.textContent);
  
    // 2. Augmentez la valeur du niveau
    let newLevel = currentLevel + 1;
  
    // 3. Mettez à jour le niveau dans l'HTML
    currentLevelElement.textContent = newLevel;
  
    // 4. Tableau des données correspondant aux niveaux
    const dataTable = ['Data for level 0', 'Data for level 1', 'Data for level 2', 'Data for level 3'];
  
    // 5. Utilisez la nouvelle valeur pour obtenir une donnée du tableau
    let newData = dataTable[newLevel];
  
    // 6. Affichez la nouvelle donnée
    document.getElementById('current-data').textContent = newData;
  });
  */