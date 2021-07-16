 

function start() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");
}

exports.start = start;

var readline = require('readline');

var reponseUtilisateur = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})
var reponse="";
 
function menu() {
  
    reponseUtilisateur.question('Vous voulez faire quoi?',function(reponse)  {
            console.log('votre choix : ${reponse}');
            if(reponse == 1)  {
                console.log("1 >Liste des clients");
                start();
                menu();
            } else {
                console.log("Good bye!");
                reponseUtilisateur.close();
         
    
    }

});
    

}
 
exports.menu = menu;
 

 