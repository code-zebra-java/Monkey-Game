
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-5;
  ground.x= ground.width/2;
  console.log(ground.x);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  

}


function draw() {
  background("aqua");
  
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  if (ground.x < 0){
    ground.x = ground.width/2;
    }
  
  stroke("white");
  textSize(20);
  fill("lime");
  text("Score:"+score,450,50);
  
  stroke("black");
  textSize(20);
  fill("magenta");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+score,50,50)
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityX=0;
    textSize(60);
    fill("salmon");
    strokeWeight(6);
    stroke("magenta");
    text("GAME OVER",100,300);
    }
  monkey.collide(ground);
  monkey.collide(obstacleGroup);
  Food();
  Obstacle()
  drawSprites();
  
}

function Food(){
  if(frameCount%80===0){
    banana=createSprite(600,400,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}

function Obstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(600,327,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}





