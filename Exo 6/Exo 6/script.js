// Variable qui récupèrent les paragraphes des divs 
var soupe= document.querySelectorAll('.soupe p');

var fauteuil= document.querySelectorAll('.fauteuil p');

var lit = document.querySelectorAll('.lit p')

//  variables qui récupèrent les boutons

var boire= document.getElementById("boire");
var reposer= document.getElementById("reposer");
var dormir= document.getElementById("dormir")

//  ecouteurs click + au click la fonction qui change les éléments du texte dans chaque "div"
boire.addEventListener("click",function(){
   soupe[0].innerHTML = "Bol vide";
   soupe[1].innerHTML = "Bol vide ";
   soupe[2].innerHTML = "Bol vide"

});



reposer.addEventListener("click",function(){

    fauteuil[0].innerHTML = "Fauteuil vide ";
    fauteuil[1].innerHTML = "Fauteuil vide ";
    fauteuil[2].innerHTML = "Fauteuil vide ";
    
    
});



dormir.addEventListener("click",function(){

    lit[0].innerHTML = "Lit pas fait ";
    lit[1].innerHTML = "Lit pas fait ";
    lit[2].innerHTML = "Lit pas fait ";
})