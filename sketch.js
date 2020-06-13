var movingRect, fixedRect
var movingRect1, fixedRect1


function setup() {
  createCanvas(800,400);
 movingRect=createSprite(400, 200, 50, 50);
 movingRect.shapeColor="green";
 fixedRect=createSprite (100,200,50,50);
 fixedRect.shapeColor="green";
 fixedRect.velocityX=3;
 movingRect.velocityX=-3;
 movingRect1=createSprite(350,250,100,130);
 fixedRect1=createSprite(300,150,200,150);
 movingRect1.shapeColor="blue";
 fixedRect1.shapeColor="black";
}
function draw() {
  background(255,255,255);  

movingRect1.x=mouseX;
movingRect1.y=mouseY;


    if(isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
}
if(isTouching(movingRect1, fixedRect1)){
movingRect1.shapeColor=rgb(random(0,255),random(0,255),random(0,255));
fixedRect1.shapeColor=rgb(random(0,255),random(0,255),random(0,255));
}
else{
  movingRect1.shapeColor="blue";
 fixedRect1.shapeColor="black";
}

  drawSprites();
text([mouseX,mouseY],mouseX,mouseY);

}

