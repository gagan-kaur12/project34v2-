const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background, background_img,ground, hero,monster, monster_img;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block11,block12,block13,block14,block15,block16,block17,block18;
var block21,block22,block23,block24,block25,block26,block27,block28;

function preload() {
//preload the images here
background_img = loadImage("GamingBackground.png");
monster_img = loadAnimation("Monster-01.png","Monster-02.png");

}

function setup() {
  createCanvas(3000, 800);

   // create sprites here

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,550,1800,10);

  hero = new Hero(180,300,200);
 fly = new Fly(hero.body,{x:100 ,y:50});
 block1 = new Block(650,300);
 block2 = new Block(650,250);
 block3 = new Block(650,200);
 block4 = new Block(650,150);
 block5 = new Block(650,100);
 block6 = new Block(650,50);

 block11 = new Block(750,300);
 block12 = new Block(750,250);
 block13 = new Block(750,200);
 block14 = new Block(750,150);
 block15 = new Block(750,100);
 block16 = new Block(750,50);

 block21 = new Block(850,300);
 block22 = new Block(850,250);
 block23 = new Block(850,200);
 block24 = new Block(850,150);
 block25 = new Block(850,100);
 block26 = new Block(850,50);
 monster = createSprite(1300,300);
 monster.addAnimation("monster",monster_img);
 monster.scale =0.2;
 monster.velocityX = -2;
}

function draw() {
  background(background_img);
  Engine.update(engine);
 
 // drawSprites();
 ground.display();
 hero.display();
fly.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
//image(monster_img,950,300,200,200);
console.log(block22.x)
if(monster.x<850){
  monster.velocityX = 4;
}
drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX,y: mouseY});
}

