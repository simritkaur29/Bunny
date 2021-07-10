var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applee=loadImage("apple.png")
  leaff=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple=createSprite(random(50.350),100)
  apple.addImage(applee)
  apple.scale=0.1
  apple.velocityY=4
   apple.lifetime =300 
   
   
ss=Math.round(random(0,3))
console.log(ss)
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 apple.collide(edges)
 rabbit.x=mouseX
  drawSprites();
  if(frameCount%80===0){
   if(ss<3){
      spawnapples ();
  }
    if(ss> 1){
    spawnleaves()  
  }  
  }
}


function spawnapples(){
  apple=createSprite(Math.round(random(50,350)),Math.round(random(10,100)))
  apple.addImage(applee)
  apple.scale=0.1
  apple.velocityY=4
   apple.lifetime =150
}

function spawnleaves(){

 
    leaves=createSprite(200,Math.round(random(10,100)))
leaves.addImage(leaff)
leaves.velocityY= 6
leaves.scale=0.1
leaves.lifetime=150
  }
