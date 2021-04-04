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
     
  
      

// for(var i = 1 ; i <= factorielle ; i++){
//         factorielleat = factorielleat * i ;
      

  //         if (x > 0) {
  //           return (1 + foo(x - 1));
  //         }
  //         return 0;
  //       }
        