// Créer un script qui affiche la position du carré passé en premier argument dans le carré du
// second argument.
// Ex. d’appel du script :
// $> ./rectangle c1.txt c2.txt
// 2,1
// $> cat c1.txt

const fs = require("fs");
const c1 = fs.readFileSync("./" + process.argv[2], "utf-8").split("\r\n");
const c2 = fs.readFileSync("./" + process.argv[3], "utf-8").split("\r\n");
console.log(c1);
console.log(c2);

for (var i = 0; i < c1.length; i++) {
  for (var j = 0; j < c2.length; j++) {
    console.log(c1, c2);
  }
}
