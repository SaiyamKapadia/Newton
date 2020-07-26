var roof,dustbin;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
engine = Engine.create();
world = engine.world;
createCanvas(1600,700);

bobDiameter = 40;
	roof = new Roof(width/2,height/4,width/7,20); 
	bobObject1 = new Bob(800,450,20);
	bobObject2 = new Bob(840,450,20);
	bobObject3 = new Bob(880,450,20);
	bobObject4 = new Bob(760,450,20);
	bobObject5 = new Bob(920,450,20);

rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
rope3 = new Rope(bobObject3.body,roof.body,0,0);
rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);

	//dustbin = new DustBin(1200,650);
	Engine.run(engine);
}
function draw(){
background("black");
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
//dustbin.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}
										



















