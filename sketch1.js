var fixedRect,movingRect;

function setup() {
  createCanvas(800,600);

  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(400,400,80,30);

  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";

  fixedRect.debug=true;
  movingRect.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("black"); 
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  
  //console.log(movingRect.x)
  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.width/2 - fixedRect.width/2)
  
  bounceOff(fixedRect,movingRect);
  
drawSprites();
}








