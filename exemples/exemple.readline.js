// récuperation du module 'readline'

var readline = require('readline');


// création d'un objet 'readline permettant de récupérer la saisie utilisateur

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// recuperation de la saisie utilisateur

rl.question('Vous allez bien ? : ',function(saisie) {

    // la variable 'saisie' contient la saisie effectuée
    console.log('Vous avez saisi :  ${saisie}');

    rl.close();
     
});