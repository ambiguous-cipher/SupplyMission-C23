var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	side1 = new SideClass(400, 655, 100, 10);
	side2 = new SideClass(450, 610, 10, 100);
	side3 = new SideClass(350, 610, 10, 100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.05, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() { 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody, false);
  } 
  
  drawSprites();
  side1.display();
  side2.display();
  side3.display();
}

/*function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    return true;
  } else {
	return false;
  }
}*/



