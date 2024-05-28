let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostrarBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostrarRaquete();
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
}

function mostrarBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostrarRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && 
        yBolinha - raio < yRaquete + raqueteAltura && 
        yBolinha + raio > yRaquete) {

     velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca() {

    if(colidiu) {
        velocidadeXBolinha *= -1;
    }
}

    raquetada.play();

}

}

function verificacaoColisaoRaquete(x,y){
  
  colidiu = colideRectCircle(x,y, raqueteComprimento,raqueteAltura,xBolinha,ybolinha,raio);
  
  if(colidiu){
    
    velocidadeXBolinha *= -1;
    
    raquetada.play();
  }
}
function
movimentaRaqueteOponente(){
  if (keylsDown(87)){
    yRaqueteoponente-=10;
    if(keylsDown(83)){
      YRaqueteOponente +=10;
      
    }
  }
 function incluiPlacar(){
   stroke(255
         texAlign(CENTER);
   texSize(16);
   fill(color(255,142,0))
   rect(150,10,40,20);
   fill(255)
   text(meusPontos,170,26)
   fill(olor(255,140,0));
   rect(450,10,40,20);
   fill(255);
   text(pontosDoOponente,470,2)
 }
  function marcaponto(){
    if(xBolinha > 590){
      meusPontos +=1;
      ponto.play();
      
    }
  }
  if(xbolinha  < 10){
    pontosDoOponente +=1;
    ponto.play();
  }
  }
function preload(){
  trilha = loadSound("trilha.mp3
                  
  ponto = loadSound("ponto.mp3")
}
raquetada = loadSound("raquetada.mp3");
}