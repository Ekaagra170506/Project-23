var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	b1=createSprite(400,height-50,200,20);
	b2=createSprite(500,height-90,20,100);
	b3=createSprite(300,height-90,20,100);
	b1.shapeColor=color(255,0,0);
	b3.shapeColor=color(255,0,0);
	b2.shapeColor=color(255,0,0);
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	box1 = Bodies.rectangle(400,635,200,20, {isStatic:true} );
	 World.add(world, box1);
	 
	 box2 = Bodies.rectangle(500,595,20,100, {isStatic:true} );
	 World.add(world, box2);

	 box3 = Bodies.rectangle(300,595,20,100, {isStatic:true} );
	 World.add(world, box3);

	 

	 
	 
	  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.scale=0.15
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
}
}