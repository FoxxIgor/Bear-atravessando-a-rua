let xBear = 50;
let yBear = 366;
let colisao = false;

function mostraAtor(){
    image(ator, xBear, yBear, 30, 30);
}
function movimentarAtor(){
    console.log("MOVIMENTAR ATOR FOI EXECUTADO")
    if(keyIsDown(UP_ARROW)){
        yBear -= 2;
        console.log("up")
    }
    if(keyIsDown(DOWN_ARROW)){
        yBear += 2;
    }
    if(keyIsDown(LEFT_ARROW)){
        xBear -= 2;
    }
    if(keyIsDown(RIGHT_ARROW)){
        xBear += 2;
    }
    
}
function voltarAtor(){
    ator = loadImage("Imagens/Ator.png");
    xBear = 100;
    yBear = 366;
}
function verificaColisao(){
    for(let i=0; i<imagemCarros.length; i++){
         colisao = collideRectRect(xCarros[i], yCarros[i], wCarros, hCarros, xBear, yBear,30,30)
         //console.log(colisao);
         if(colisao){
            voltarAtor();
         }
    }
}