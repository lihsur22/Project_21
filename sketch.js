var bullet, wall, speed, weight, thickness;

function setup() {
  var canvas = createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(200,200,200);  

  if(hasCollided(bullet,wall))
  {
    //Come to think of it; the bullet.velocityX = 0 and the other command below can make the collide function
    bullet.velocityX = 0;
    
    // The command below displaces the bullet. Without it the bullet would go past or go inside the wall
    bullet.x = canvas.width - (canvas.width - wall.x) - ((wall.width + bullet.width)/2);

    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if(damage > 10)
    {
      bullet.shapeColor = color(255,0,0);
    }

    if(damage < 10)
    {
      bullet.shapeColor = color(0,255,0);
    }
  }

  
  drawSprites();
}

function hasCollided(lbullet, lwall) {
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}