//Les variables
    //nombre
    var nombre= 42

    console.log(nombre);
    //tableau
    var tab=[2,5,6,7,9]
    console.log(tab);
    //chaine de caracteres
    var chaine= "Ceci est une chaine de caractère"
    
    console.log(chaine);
//Conditions

    //if, else if ,else
    var nombre= 50
    if(nombre >= 50){
        console.log("super moitmoit")
    } else if(nombre<=40){
        console.log("Peux mieux faire ")


    }else{
        console.log("La grande réponse")
    }

    //switch
    var tab=[2,5,6,7,9]
    switch(tab.length){
        case 10:  
            console.log("Il y a 10 éléments dans le tableau ");
            break;
         case 5:
            console.log("Il y a 5 éléments dans le tableau ");
            break;
        case 0:
            console.log(" le tableau est vide ");
            break;
        default:
            console.log("Je ne connais pas le nombre d'éléments du tableau ");
    
    


    }


//Boucles
var compteur = 0

    //while
 while(compteur <= 5){
    console.log("Messire, on en a ");
    console.log();
    compteur++;
    
    }
   


    //for
    var tab=[2,5,6,7,9]

    for(i=0;i<5;i++){
        console.log(tab[i]);

    }
