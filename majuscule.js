// Créer un script qui affiche un mots  sur deux en majuscule et le reste en minuscule de la
// chaîne de caractères du premier argument.
// Ex. d’appel du script :
// $> ./majuscule “Bien le bonjour!”
// bien LE bonjour

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


// --transforme la chaine de caractère en tableau avec une "fonction" selon le langage choisi
// --faire une boucle qui parcours le tableau du premier au dernier élément de ce tableau
// --pour chaque itération de la boucle on dit que si l'index est modulo 2 "donc pair" ,
//  Alor on afficher en majuscule l'élément en question.
// --sinon si l'index est "impair" alors  on affiche l'élément en minuscule.

