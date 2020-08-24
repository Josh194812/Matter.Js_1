const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas, engine, world, ground, ball, ball2;


function setup() {
  canvas = createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true

  }
  var ball_options={
    restitution:1,
    density:10,
    friction:1,

  }
  
  var ball2_options={
    restitution:1,
    density:5,
    friction:0.2,

  }


  ground=Bodies.rectangle(400,390,800,20, options);
  ball=Bodies.circle(370,200,40,ball_options);
  ball2=Bodies.circle(430,100,40,ball2_options);
  World.add(world, ground);
  World.add(world, ball);
  World.add(world,ball2);
  console.log(ground);
  

}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 800, 20); 
  ellipseMode(RADIUS);  
  ellipse(ball.position.x,ball.position.y,40);
  ellipse(ball2.position.x,ball2.position.y,40);
}