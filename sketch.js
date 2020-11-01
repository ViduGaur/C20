var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
fixRect= createSprite(200,200,50,80);
fixRect.shapeColor = "green";
movingRect = createSprite(200,600,80,30);
movingRect.shapeColor = "green";
fixRect.velocityY = 3;
movingRect.velocityY= -3; 

}

function draw() {
  background(0); 
  // movingRect.x = World.mouseX;
   //movingRect.y = World.mouseY;
   console.log(movingRect.x- fixRect.x);
   if(movingRect.x - fixRect.x <fixRect.width/2  + movingRect.width/2
    && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2
    && movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2){
    movingRect.shapeColor = "red";
    fixRect.shapeColor = "red";
    movingRect.velocityY = 3;
    fixRect.velocityY = -3;
   }
   else {
    movingRect.shapeColor = "green";
    fixRect.shapeColor = "green"; 
   }
  drawSprites();
}