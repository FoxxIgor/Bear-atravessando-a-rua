function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw(){
    background(estrada);
    mostraAtor();
    movimentarAtor();
    mostrarCarro();
    movimentarCarro();
    voltarCarro();
    verificaColisao();
}