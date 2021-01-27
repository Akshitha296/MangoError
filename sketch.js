
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, rocc, tree;

function preload()
{
	boy = loadImage ("Plucking mangoes/boy.png");
	tree = loadImage ("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango (900,350);
	mango2 = new Mango (880,460); 
	mango3 = new Mango (950,420);
	mango4 = new Mango (1010,380);
	mango5 = new Mango (1050,430);

	rocc = new Stone (80,450,50);

	slingie = new Sling(rocc.body,{x:185,y:475})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  image (boy,150,400,200,300);

  image (tree,800,300,300,400);

  rocc.display();

  mango1.display ();
  mango2.display ();
  mango3.display ();
  mango4.display ();
  mango5.display ();

  slingie.display ();

  detectCollision(rocc,mango1);
  detectCollision(rocc,mango2);
  detectCollision(rocc,mango3);
  detectCollision(rocc,mango4);
  detectCollision(rocc,mango5);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(rocc.body,{x:120,y:550});
		slingie.attach (rocc.body);
	}
}

function detectCollision(stone1,mangoting){
	mangoBodyPosition = mangoting.body.position;
	stoneBodyPosition = stone1.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=mangoting.r+stone1.r){
		Matter.Body.setStatic (mangoting.body,false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(rocc.body, {x: mouseX , y: mouseY});
    
}  

function mouseReleased () {
	slingie.fly();
}