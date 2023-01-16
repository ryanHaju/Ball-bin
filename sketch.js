
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine,world

var ball;
var ground,top1,left,right;
var radius = 40;
function setup() {
	
  createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	var ballop={restitution:0.75,isStatic:false,friction:0,density:1.2};
	
  ball=Bodies.circle(260,100,radius/2,ballop);
  //ball.size(70,70);
  
    World.add(world,ball);

  ground = new Ground(width/2,670,width,20);
  //top1 = new Ground(200,10,400,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);

  rectMode(CENTER);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  
  ground.display();
  //top1.display();
  right.display();
  left.display();

  ellipse(ball.position.x,ball.position.y,radius,radius);
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
  Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
  
}
