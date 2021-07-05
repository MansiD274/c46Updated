var gameState = 0;
var playerCount;
var allPlayers;
var database;
var players;
var naruto
var sasuke;
var laser2,laser1;
var lasers = [];
var form, player, game;
var laserGroupP1,laserGroupP2,lasers

function preload(){
bg1 = loadImage("images/bg1.png")
img1 = loadImage("images/naruto.png")
img2 = loadImage("images/sasuke.png")
bg2 = loadImage("images/background.png")
  
}




function setup() {
  createCanvas(displayWidth,displayHeight);
 database=firebase.database()
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(bg1);  
  
if (playerCount===2){
  game.update(1)
}

if(gameState === 1){
  clear();
  game.play();
}


}
/*function keyPressed(){
  if(keyCode=87){
//  kunai = new Laser();
lasers.push(new Laser(player,0))

if(player.index===1){
  laser = createSprite(100,400,100,100)
  laser.velocityX=13
}
else{
  laser = createSprite(1220,400,100,100)
  laser.velocityX=-13
}


  }
}*/