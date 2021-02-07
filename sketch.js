
var fixedRect,movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(800,600);
  
  fixedRect = createSprite(400,200,50,80);
  movingRect = createSprite(400,400,80,30);

  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow"

  fixedRect.debug= true;
  movingRect.debug = true;


  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor="purple";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor="purple";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor="purple";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor="purple";
}
function draw() {
  background("black"); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(isTouching(movingRect,gameobject1)){
    gameobject1.shapeColor="green";
    movingRect.shapeColor="green"

  }
  else {
    gameobject1.shapeColor="purple";
    movingRect.shapeColor="yellow"
  }
  drawSprites();
}

