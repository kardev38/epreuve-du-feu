// Créer un script qui affiche un escalier en fonction du premier argument.
// Ex. d’appel du script :
// $> ./escalier 4
//    #
//   ##
//  ###
// ####



var readline = require("readline-sync");
var nb_etages = readline.questionInt("Saisir un argument : ");

for (var i = 0; i < nb_etages; i++) {
  console.log(" ".repeat(nb_etages - i) + "#".repeat(i + 1));
}

// crée une variable de l'argument saisi 
// dire que l'argument est le nombres de marche a afficher 
// l'argument saisi sera aussi le nombres d'iteration de la boucle
// a chaque iteration on dira que espace sera -1 et diez +1


