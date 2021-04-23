var fixedRect, movingRect;


function setup()
{
  createCanvas(1200,800);

  

  movingRect=createSprite(600,400,50,50);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  ball1=createSprite(200,300,40,40);
  ball1.shapeColor="green";
 



 
  
}

function draw() 
{
  background("pink");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x);


if(isTouching(movingRect,ball1))
{
  movingRect.shapeColor="red";
    ball1.shapeColor="red";
}

else{

  movingRect.shapeColor="green";
    ball1.shapeColor="green";

}

  drawSprites();
}


