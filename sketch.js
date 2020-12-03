var fr,mr;
function setup(){
  createCanvas(400,400);
  fr=createSprite(200,200,20,30);
  fr.shapeColor="green";
  mr=createSprite(0,0,20,30);
  mr.shapeColor="green";
  
}

function draw(){
  background(0);
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if(mr.x-fr.x<mr.width/2+fr.width/2 &&
    fr.x-mr.x<mr.width/2+fr.width/2 &&
    fr.y-mr.y<mr.height/2+fr.height/2 &&
    mr.y-fr.y<mr.height/2+fr.height/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  }
drawSprites();
}