
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world 
var ball

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	fill("yellow");
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	leftBox = new Box(520, 610, 20, 70)
	bottomBox = new Box1(500, 555, 120, 20)
	rightBox = new Box(660, 610, 20, 70)

	ball = new Ball(100, 600, 40)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(245);
	leftBox.display();
	rightBox.display();

	rect(this.ground.position.x, this.ground.position.y, 800, 10 )
	ball.display();
	bottomBox.display();
	drawSprites();

}


function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position, {x:90,y:-100})
	}
}
