const pierrebout = document.getElementById("pierre");
const feuillebout = document.getElementById("feuille");
const ciseauxbout = document.getElementById("ciseaux");
// const resultat_ordi=document.getElementById("result"); 
const jeu_eff = document.getElementById("partie");
const jeu_eff2 = document.getElementById("partie2");
const result_jeux =document.getElementById("result")

const tab = [pierrebout, feuillebout, ciseauxbout];
   

pierrebout.addEventListener("click",jeu);
feuillebout.addEventListener("click",jeu);
ciseauxbout.addEventListener("click",jeu);


function jeu(){ 

let aleatoire = Math.floor(Math.random()*tab.length);
let choix_ordi = tab[aleatoire].id; 
let choix_joueur = this.name   /* variable créer pour le choix du jouer.
this permet d'appeller de fçon unique  le choix du joeur lorsqu'il click pierre feuille et ciseaux */

let jeu_ordi = jeu_eff.innerHTML = "l'ordi a joué " + choix_ordi  ;
let jeu_joueur = jeu_eff2.innerHTML = "le joueur a joué " + choix_joueur;
// resultat_ordi.innerHTML = choix_ordi ;

if ((choix_ordi == "pierre" && choix_joueur == "feuille") || (choix_ordi == "feuille" && choix_joueur == "ciseaux") ||(choix_ordi == "ciseaux" && choix_joueur == "pierre") ){
  result_jeux.innerHTML = "le joueur à gagné";

}else if(choix_ordi === choix_joueur){
  result_jeux.innerHTML = "Egalité";

}else{
result_jeux.innerHTML = "L'ordi a gagné";
}

}







   