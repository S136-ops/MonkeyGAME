
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score=0;

var play=1
var end=0 
var gameState=play;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
monkey=createSprite(60,330,20,20)
  monkey.addAnimation("moving", monkey_running )
  monkey.scale=0.1;
  monkey.debug=false;
  monkey.setCollider("circle",0,0,300)
  
  
  ground=createSprite(300,375,1200,10);
  ground.velocityX=-6;
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();

  
}


function draw() {
background(255);
  
  
   stroke("black")
 textSize(20)
 fill("black")
  text("SURVIVAL TIME:"+survivalTime,200,50)
  
  monkey.collide(ground);
  
  
  text("score:"+score,500,100)
  
  
  
  
   if(ground.x<0){
    ground.x=ground.width/2;
}
  
  
  
  if(gameState==play) {if(keyDown("space")&&monkey.y>339){
monkey.velocityY=-18;
  }
  
 monkey.velocityY=monkey.velocityY+0.8; 
                      
  if(monkey.isTouching(obstacleGroup)){
    gameState=end;
  }
  banana();
  obstacle(); 
                       
    if(monkey.isTouching(foodGroup)){
foodGroup.destroyEach()
      score=score+1;  
}                   

 survivalTime=Math.ceil(frameCount/frameRate())   
}
  
  if(gameState==end){
text("GAME END",250,200)
  foodGroup.velocityX=0;
    obstacleGroup.velocityX=0;
  
}
  drawSprites();
  
 
    
}

function banana(){
if(frameCount%102===0){
 var banana=createSprite(570,Math.round(random(170,280)),20,20)
banana.velocityX=-6; 
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.lifetime=600/4;
  foodGroup.add(banana)
}


}
function obstacle(){
  if(frameCount%200===0){
stone=createSprite(590,335 ,20,20)
    stone.addImage(obstaceImage)
  stone.scale=0.18;
    stone.velocityX=-5;
    stone.lifetime=600/4;
    obstacleGroup.add(stone)
    
}





}