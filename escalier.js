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

// -Faire une boucle A qui commence à 0 et qui va jusqu'à la valeur en entier du premier argument moins 1
// -Pour chaque itération de cette boucle, faire:
//  -Une boucle B qui commence à 0 et qui va jusqu'à la valeur en entier du premier argument moins 1
//  Pour chaque itération de cette boucle, faire:
//  -Un test pour vérifier si la valeur actuelle de la boucle B 
//  est inférieure à la valeur en entier du premier argument moins la valeur actuelle de la boucle A
//  -Si c'est vrais, alors il faut afficher un espace ( )
//  -Sinon, il faut afficher une dièse (#).
// -Afficher un retour à la ligne (\n)
