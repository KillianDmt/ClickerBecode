/*document.getElementById('multiplicateurBonus').addEventListener('click', function miseANiveau(number) {
    let monNiveauElement = document.getElementsByClassName('niveauBonus');
    let monNiveau = parseInt(monNiveauElement.textContent);

console.log(parseInt.monNiveau);
console.log(parseInt.monNiveauElement);


    let nouveauNiveau = monNiveau++;

console.log(nouveauNiveau);

    monNiveauElement.textContent = nouveauNiveau;

    console.log(monNiveauElement);
    
    const prixNiveau = [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160,
        164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320,
        324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400, 404, 408, 412, 416, 420, 424, 428, 432, 436, 440, 444, 448, 452, 456, 460, 464, 468, 472, 476, 480,
        484, 488, 492, 496, 500, 504, 508, 512, 516, 520, 524, 528, 532, 536, 540, 544, 548, 552, 556, 560, 564, 568, 572, 576, 580, 584, 588, 592, 596, 600,
        604, 608, 612, 616, 620, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 684, 688, 692, 696, 700, 704, 708, 712, 716, 720, 724, 728, 732, 736, 740, 744, 748, 752, 756, 760,
        764, 768, 772, 776, 780, 784, 788, 792, 796, 800, 804, 808, 812, 816, 820, 824, 828, 832, 836, 840, 844, 848, 852, 856, 860, 864, 868, 872, 876, 880, 884, 888, 892, 896, 900, 904, 908, 912, 916, 920,
        924, 928, 932, 936, 940, 944, 948, 952, 956, 960, 964, 968, 972, 976, 980, 984, 988, 992, 996, 1000 ];

    let nouveauPrix = prixNiveau[nouveauNiveau];

    document.getElementsByClassName('quantiteBonus').textContent = nouveauPrix;

console.log(prixNiveau);
console.log(nouveauPrix);

});
*/

document.getElementById('multiplicateurBonus').addEventListener('click', function() {
    // Récupérer l'élément qui contient le niveau
    let monNiveauElement = document.getElementsByClassName('niveauBonus')[0]; // Sélectionner le premier élément de la liste
    let monNiveau = parseInt(monNiveauElement.textContent);

    if (isNaN(monNiveau)) {
        console.error("Erreur : monNiveau n'est pas un nombre valide.");
        return;
    }
    // Incrémenter le niveau
    let nouveauNiveau = ++monNiveau; // Pré-incrémentation pour utiliser la nouvelle valeur

    // Afficher le nouveau niveau dans la console
    console.log("Nouveau niveau:", nouveauNiveau);

    // Mettre à jour le texte du niveau affiché dans le HTML
    monNiveauElement.textContent = nouveauNiveau;

    // Calculer le nouveau prix à partir du tableau prixNiveau
    const prixNiveau = [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160,
        164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320,
        324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400, 404, 408, 412, 416, 420, 424, 428, 432, 436, 440, 444, 448, 452, 456, 460, 464, 468, 472, 476, 480,
        484, 488, 492, 496, 500, 504, 508, 512, 516, 520, 524, 528, 532, 536, 540, 544, 548, 552, 556, 560, 564, 568, 572, 576, 580, 584, 588, 592, 596, 600,
        604, 608, 612, 616, 620, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 684, 688, 692, 696, 700, 704, 708, 712, 716, 720, 724, 728, 732, 736, 740, 744, 748, 752, 756, 760,
        764, 768, 772, 776, 780, 784, 788, 792, 796, 800, 804, 808, 812, 816, 820, 824, 828, 832, 836, 840, 844, 848, 852, 856, 860, 864, 868, 872, 876, 880, 884, 888, 892, 896, 900, 904, 908, 912, 916, 920,
        924, 928, 932, 936, 940, 944, 948, 952, 956, 960, 964, 968, 972, 976, 980, 984, 988, 992, 996, 1000 ];

    let nouveauPrix = prixNiveau[nouveauNiveau - 1]; // -1 car les tableaux commencent à l'indice 0

    // Afficher le nouveau prix dans la console
    console.log("Nouveau prix:", nouveauPrix);

    // Mettre à jour le texte du prix affiché dans le HTML
    let quantiteBonusElement = document.getElementsByClassName('quantiteBonus')[0];
    quantiteBonusElement.textContent = nouveauPrix.toString(); // Assurez-vous que le prix est converti en chaîne si nécessaire
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