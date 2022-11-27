

var trex,trex_running;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");


}


function setup(){
  createCanvas(600,200);

  trex = createSprite(50,160,10,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(300,165,600,10);

}

function draw(){
  background("skyblue");

  if(keyDown("space")){
    trex.velocityY = -12;
  }

  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(ground);

  drawSprites();
}


