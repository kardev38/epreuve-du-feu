// Créer un script qui calcul la factoriel du nombre passé en argument.
// Ex. d’appel du script :
// $> ./factoriel 3
// 6
  var readline = require("readline-sync");
const factorielle = readline.questionInt("Quelle factorielle voulez-vous : ");

 
 function facto(nDeMaFonction){
  
     if( nDeMaFonction == 1){
          return 1;
      }   else {
            return nDeMaFonction * facto(nDeMaFonction - 1);;   
        }
  }
        console.log(facto(factorielle))
     
  
      
