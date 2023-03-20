let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 155, 210, 260, 320];
let velocidade = [4, 3, 6, 5, 2, 2];
let wCarros = 50;
let hCarros = 40;

function mostrarCarro(){
    for(let i=0; i<imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
    }
}
function movimentarCarro(){
    for(let i=0; i<imagemCarros.length; i++){
        xCarros[i] -= velocidade[i];
    }
}
function voltarCarro(){
    for(let i=0; i<imagemCarros.length; i++){
        if(xCarros[i]<0){
            xCarros[i] = 600
        }
    }
}