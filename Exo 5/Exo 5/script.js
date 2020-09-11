
function recuperation(a){ 
    var pecher = document.getElementById("poisson"+ a).textContent;
    return(pecher);

}
console.log(recuperation(1))


function eliminer(a){
  document.getElementById("poisson"+ a).textContent="Je suis un poisson mort "
    
}
eliminer(1)
eliminer(2)
eliminer(3)