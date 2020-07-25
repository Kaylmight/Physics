const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var ball,ground;


function setup(){
createCanvas(400,400)
engine = Engine.create()
var groundOption = {
  isStatic:true
}
ground = Bodies.rectangle(200,400,400,20,groundOption)
World.add(engine.world,ground);
var ballOption = {
  restitution:1
}
ball = Bodies.circle(250,200,30,ballOption)
World.add(engine.world,ball);
}
function draw(){
background('black');
Engine.update(engine)
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30);
}