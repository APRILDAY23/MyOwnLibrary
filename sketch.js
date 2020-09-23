var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "yellow";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;

  if(isTouching(gameObject1,gameObject4)){
    gameObject1.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }else {
    gameObject1.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

bounceOff(movingRect, fixedRect);
  drawSprites();

}

