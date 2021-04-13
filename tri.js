// Créer un script qui affiche les valeurs qui lui sont passées en argument triées par ordre 
// décroissant.
// Bonus : implémenter plusieurs algorithme de tri (tri à bulle, tri sélectif, ... )
// Ex. d’appel du script :
// $> ./tri 4 5 1 3 2
// // 5 4 3 2 1
 
var tab = process.argv.slice(2);

console.log("saisie initiale : " + tab );

function tri(array){
  for(i = 0 ; i < array.length ; i++){
     for(j = 1; j < array.length ; j++){
      var tmp = array[j];
      if(array[j] > array [j + 1]){
       tmp = array[j];
       array[j] = array[j+1];
       array[j+1] = tmp;
       
      }
      return array[j];
    }
    
  } 
       tri(array[j]) = tab ;
    console.log("saisie Trié : " + tab);

