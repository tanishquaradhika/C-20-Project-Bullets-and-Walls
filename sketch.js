var bullet,wall,thickness;
var speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  thickness=random(30,52);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor=("white");
  wall=createSprite(1400,200,thickness,height/2);
  wall.shapeColor=color(80,80,80) ;
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed;
}

function draw() {
  
  background("blue"); 
  bullet.collide(wall);

   if(hasCollided(bullet,wall)){
bullet.velocityX=0;
damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
bullet.collide(wall);
if(damage>20){
  wall.shapeColor=("red");
 bullet.collide(wall);
 }
}
if(damage<20){
 wall.shapeColor=("green");
 bullet.collide(wall);
}   

 
  drawSprites();
}
function hasCollided(p1,p2){
p1RightEdge=p1.x+p1.width;
p2LeftEdge=p2.x;
if(p1RightEdge>=p2LeftEdge){
 return true;
}
return false;
}