let playerX = 50;
let playerY = 50;
let playerSpeed = 3;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if(keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    playerX += playerSpeed;
  }
  else if(keyIsDown(UP_ARROW)){
    playerY -= playerSpeed;
  }
  else if(keyIsDown(DOWN_ARROW)){
    playerY += playerSpeed;
  }
let hitWall1 = collideRectCircle(200,0,30, 400, playerX, playerY, 30);
  if (hitWall1) {
    playerX = 50;
    playerY = 50;
  }
let hitWall2 = collideRectCircle(400,200,30, 400, playerX, playerY, 30);
  if (hitWall2) {
    playerX = 50;
    playerY = 50;
  }
  
  background("rgb(121,141,224)");
  fill("rgb(251,24,179)")
  noStroke();
  ellipse(playerX, playerY, 60, 60);
  
  fill("rgb(35,113,154)")
  ellipse(playerX, playerY, 55, 40);
  
  fill("rgb(255,255,255)")
  ellipse(playerX, playerY, 20, 55);
  
  fill(0, 0, 255);
  let wall1 = rect(200, 0, 30, 400);
  let wall2 = rect(400, 200, 30, 400);
  
  fill(0, 255, 0);
  let goal = rect(750, 550, 50, 50);
  
  let hitGoal = collideRectCircle(750, 550, 50, 50, playerX, playerY, 20);

  if (hitGoal) {
    background("rgb(0,0,0)")
    fill(225);
    textSize(64);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, height / 2);
  }
}
