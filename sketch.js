var fish;  
  var sharks,sharksGroup;
  var ground,invisibleGround, groundImage;
  var score;
  var score=0;
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
  var gameOver, restart;

  
  
  
  function preload(){

    



  }






















function setup() {






  createCanvas(1840,900);



  
  
 fish= createSprite(50,height-50,100,100);
 fish.shapeColor="red";
 sharksGroup = new Group();
 obstaclesGroup = new Group();


 
 invisibleGround = createSprite(200,height-10,3250,10);
 invisibleGround.visible = true;
 






















}

function draw() {
  background("skyblue");  



  if (keyDown("left")) {
    fish.x=fish.x-5;
    
   }
   
   if (keyDown("right")) {
     fish.x= fish.x+5;
    
     
   }
   
   if (keyDown("up")) {
     fish.y=fish.y-5;
     
   }
   
   if (keyDown("DOWN")) {
     fish.y=fish.y+5;
     
   }
   
   if (gameState===PLAY){








  


   }



  










   



   spawnSharks();
  drawSprites();
}  


function spawnSharks() {
  //write code here to spawn the clouds
  if (frameCount % 50 === 0) {
    var sharks = createSprite(0,120,40,10);
    sharks.y = Math.round(random(80,600));
    
    sharks.scale = 0.5;
    sharks.velocityX = 6;
    
     //assign lifetime to the variable
    sharks.lifetime = 400;
    
    //adjust the depth
    
    
    //add each cloud to the group
    sharksGroup.add(sharks);
  }
  
}