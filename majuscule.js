// Créer un script qui affiche un mots  sur deux en majuscule et le reste en minuscule de la
// chaîne de caractères du premier argument.
// Ex. d’appel du script :
// $> ./majuscule “Bien le bonjour!”
// bIeN lE bOnJoUr

var readline = require("readline-sync");
var phrase = readline.question("Saisir une phrase : ");
var phrase2 = "";
var passage = 0;

for (var i = 0; i <= phrase.length; i++) {
  //  passage += 1 ;
  if (i == 0) {
    phrase2 = phrase[i].toLowerCase();
  }
  if (phrase.charAt(i) == " ") {
    passage -= 1;
  }
  if (i !== 0) {
    if (passage % 2 == "0") {
      phrase2 += phrase.charAt(i).toLowerCase();
    } else {
      phrase2 += phrase.charAt(i).toUpperCase();
    }
  }
}
console.log(phrase2);
