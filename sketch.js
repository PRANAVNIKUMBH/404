var canvas;
var backgroundImage;
var bgImg;
var db;
var form, player;
var playerCount,players,car1,car2,gameState,c1,c2,t,cars,f,c,o,fg,cg,og;


function preload() {
  backgroundImage = loadImage("assets/background.png");
  c1 = loadImage("assets/car1.png")
  c2 = loadImage('assets/car2.png')
  t = loadImage("assets/track.jpeg")
  f = loadImage("assets/fuel.png")
  c = loadImage("assets/goldCoin.png")
  o = loadImage("assets/obstacle1.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  db = firebase.database()
  game = new Game();
  game.gs()
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if (playerCount===2){
    game.us(1)
  }
    if(gameState===1){
      game.play()
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





