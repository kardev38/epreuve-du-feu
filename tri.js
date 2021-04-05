// Créer un script qui affiche les valeurs qui lui sont passées en argument triées par ordre 
// décroissant.
// Bonus : implémenter plusieurs algorithme de tri (tri à bulle, tri sélectif, ... )
// Ex. d’appel du script :
// $> ./tri 4 5 1 3 2
// 5 4 3 2 1
 


// var readline = require("readline-sync");
// var saisir = readline.question("Quel nom d'uilisateur voulez-vous : "  );
//  saisir;
var readline = require("readline-sync");
var valeur = readline.questionInt("Quel nombre voulais-vous trie  : ");
var tableau = valeur;
tableau =function(a, b){
    return a - b
}

console.log(tableau)