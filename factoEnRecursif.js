// Créer un script qui calcul la factoriel du nombre passé en argument.
// Ex. d’appel du script :
// $> ./factoriel 3
// 6
  var readline = require("readline-sync");
 var factorielle = readline.questionInt("Quelle factorielle voulez-vous : ");

 
 function facto(n){
  
     if( n == 1){
          return 1;
      }   else {
            return n * facto(n - 1);;   
        }
  }
          
        console.log(facto(factorielle));