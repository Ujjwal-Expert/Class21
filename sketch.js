var fRect, mRect;

function setup() {
  createCanvas(1200,800);
  

  //fRect = createSprite(300,200,40,90);
  bRect = createSprite(400,400,40,90);
  
  //fRect.shapeColor="red";
   
  mRect = createSprite(400,800,50,60);
  mRect.shapeColor="red";

  mRect.velocityY =-5;
  bRect.velocityY = 5;

}

function draw() {
  background("white");
  
 // mRect.x = World.mouseX;
  //mRect.y = World.mouseY;
  

   bOff(mRect,bRect)
 // mRect.velocityX=5;

  /*if(isTouch(mRect,fRect)){
    fRect.shapeColor = "green";
    mRect.shapeColor = "green"
  }
  else{
    fRect.shapeColor = "blue";
    mRect.shapeColor = "blue";
  }*/

  

  
  
  drawSprites();
}

