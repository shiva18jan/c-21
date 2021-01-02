var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car =createSprite(200,200,40,40);
  car.shapeColor="yellow";
  car.velocityX=4;

  wall=createSprite(1000,200,40,100);
  wall.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,wall)){
    textSize(20);
    text("touched",300,400);
  }
  BounceOff(car,wall);
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object2.y < object2.height/2 + object2.height/2) {
  return true;
}
else {
  return false;
}
}
function BounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX=(-1)*object1.velocityX;
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object2.y < object2.height/2 + object2.height/2){
      object1.velcityY=(-1)*object1.velocityY;
    }
}
