var fixedRect, movingRect;

function setup() { 
 
createCanvas(1200,800);
 fixedRect = createSprite(400, 200, 50, 80); 
 fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 50); 
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5
}

function draw() {
 background(0); 
//movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY;
//console.log(movingRect.x-fixedRect.x);
/*if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){ 
movingRect.shapeColor ="red"; 
fixedRect.shapeColor ="red"; 
} 
else{ movingRect.shapeColor ="green"; 
fixedRect.shapeColor ="green";
 } */
 if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
  movingRect.velocityX=movingRect.velocityX*(-1);
  fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if (  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.velocityY=movingRect.velocityY*(-1);
   fixedRect.velocityY=fixedRect.velocityY*(-1);
  }

 drawSprites();
}