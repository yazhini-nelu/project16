var monkey ,monkeyimage ,monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var ground, invisibleGround, groundImage;

function preload(){
  
  
  monkey_running =loadImage("sprite_0.png")
  
  
 bananaImage=loadImage("banana.png"); 
 obstacleImage=loadImage("obstacle.png"); 
  
}

function setup() {
 createCanvas(600,550); 
monkey=createSprite(100,300);
monkey.addImage(monkey_running); 
monkey.scale=0.2;


ground=createSprite(400,500,900,10);
ground.velocityX=-2;  
ground.x=ground.width/2;
ground.visible=false;
console.log(ground.x);
invisibleGround = createSprite(200,500,400,10);
invisibleGround.visible = false;
}