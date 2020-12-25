function preload() {
  var bullet,wall;
  var speed,weight,thickness;
}


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(23,83);
  bullet = createSprite(100, 200, 100, 20);
  bullet.shapeColor="grey";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey"
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var dividenumber = thickness*thickness*thickness
    var damage = 0.5*weight*speed*speed/dividenumber;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}