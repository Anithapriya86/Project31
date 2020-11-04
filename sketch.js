const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var grnd;
var div1, div2, div3, div4, div5, div6, div7;

function setup() {
  createCanvas(480,800);
  
  grnd = new Ground(240,780,480,20);
  div1 = new Division(10,195,10,480);
  div2 = new Division(10,195,10,480);
  div3 = new Division(10,195,10,480);
  div4 = new Division(10,195,10,480);
  div5 = new Division(10,195,10,480);
  div6 = new Division(10,195,10,480);
  div7 = new Division(10,195,10,480);
}

function draw() {
  background(255,155,255);  
  grnd.display();
  drawSprites();
}