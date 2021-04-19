// Créer un script qui affiche la position du carré passé en premier argument dans le carré du 
// second argument.
// Ex. d’appel du script :
// $> ./rectangle c1.txt c2.txt
// 2,1
// $> cat c1.txt

var fs = require('fs');
var rec1 = fs.readFileSync('c1.txt').toString().split("\n");  
var rec2 = fs.readFileSync('c2.txt').toString().split("\n");
console.log(rec1);
console.log(rec2);