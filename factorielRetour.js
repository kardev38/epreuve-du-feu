// Créer un script qui calcul la factoriel du nombre passé en argument, sans exposant.
// Ex. d’appel du script :
// $> ./factoriel 42
// 1,405,006,117,752,879,898,543,142,606,244,511,569,936,384,000,000,000

var readline = require("readline-sync");
var factorielle = readline.questionInt("Quelle factorielle voulez-vous : ");

function facto(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * facto(n - 1);
  }
}

var optimoser = facto(factorielle);
optimoser = optimoser.toLocaleString();
console.log(optimoser);

// bientot le pseudo code de l'exercice.
// méme probleme que l'exercice factoEnRecursif
