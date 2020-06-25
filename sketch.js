var particles = [];
var plinko = [];
var division = [];
var divisionHeight = 300;



function setup() {
  createCanvas(400,500);
  createSprite(400, 200, 10, 10);
}

function draw() {
  background("black"); 
  for (var k = 0; k <= width; k = k+80){
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j+50){
    plinko.push(new Plinko(j,75));
  }

  for (var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinko(j,175));
  }

  for (var j = 0; j < particles.length; j++){
    particle[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    division[k].display();
  }

  if(frameCount%60 === 0){
    particle.push(new Particle(random(width/2-10, width/2+10) ,10,10));
  }

  drawSprites();
}