// Créer un script qui affiche la position du carré passé en premier argument dans le carré du
// second argument.
// Ex. d’appel du script :
// $> ./rectangle c1.txt c2.txt
// 2,1
// $> cat c1.txt

const fs = require("fs");
const c1 = fs.readFileSync("./" + process.argv[2], "utf-8").split("\n");
const c2 = fs.readFileSync("./" + process.argv[3], "utf-8").split("\n");
console.log(c1);
console.log(c2);

function positionindes(tab1, tab2) {
  for (i = 0; i < tab2.length; i++) {
    // boucle pour parcourir les ligne du tableau c2

    for (j = 0; j < tab2[i].length; j++) {
      // boucles pour parcourir les colonne de c2
    }
  }
}
// afficher les tableau en longueur dans le terminal
// [ '123\r', '321\r', '123' ]
// [ '930870\r', '081235\r', '973217\r', '091230\r', '883700' ]
// afficher les fichier en tableau avec chaque élément séparée "bien propre"
// [[1,2,3][3,2,1][1,2,3]]
// [[9,3,0,8,7,0][0,8,1,2,3,5][9,7,3,2,1,7][0,9,1,2,3,0][8,8,3,7,0,0]]
// parcourir le tableau c2 en cherchant le premier élément du tableau c1
// ---  pour parcourir le tableau on utiliser la fonction "length"
// ensuite cherche le deuxième élément de c1 dans c2
