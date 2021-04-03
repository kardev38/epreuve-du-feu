// Créer un script qui calcul la factoriel du nombre passé en argument.
// Ex. d’appel du script :
// $> ./factoriel 3
// 6
  var readline = require("readline-sync");
var factorielle = readline.questionInt("Quelle factorielle voulez-vous : ");
var resultat = 1 ;
for(var i = 1 ; i <= factorielle ; i++){
        resultat = resultat * i ;
      
}
        console.log(resultat ); 