var fixedRect;

var movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "blue";
  
  

}

function draw() {
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  fixedRect.debug = true;
  movingRect.debug = true;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  } else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}