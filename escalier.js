var readline = require("readline-sync");
var nb_etages = readline.questionInt("Saisir un argument : ");

for(var i = 0 ; i < nb_etages ; i++){
    console.log(" ".repeat(nb_etages - i) + "#".repeat(i+1));
}