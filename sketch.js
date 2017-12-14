///////// THIRSTY //////////

var waterX = 0;
var waterY = 0;
var stepX = 0;
var waterLevel = 0;
var x = 0;

function setup() {
  //background(255, 231, 207);
  createCanvas(600, 600);
}

function draw() {
  background(255, 231, 207);
  table();
  water(stepX, waterX, waterY);
  cup(stepX);
  quench();
  meter(waterLevel);
  reset();
  plant();
  //moves glass of water
  if (keyIsDown(RIGHT_ARROW)) {
    stepX += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    stepX -= 2;
  }
  //labels meter
  /*
  fill(0);
  textFont("Georgia");
  textSize(25);
  text("Water Meter", 50, 100);
  */
} //draw closer

//draws line that depicts the surface table
function table() {
  fill(107, 63, 46); //brown
  rect(0, 400, 600, 200);
}

function plant() {
  //plant
  fill(78, 123, 25);
  noStroke();
  rect(496, 325, 10, 50);
  //plant pot
  fill(173, 82, 32);
  noStroke();
  beginShape();
  vertex(455, 375);
  vertex(545, 375);
  vertex(530, 430);
  vertex(470, 430);
  endShape();
  stroke(130, 62, 14);
  arc(500, 430, 60, 20, 0, PI, OPEN);
  line(455, 375, 545, 375);
  line(545, 375, 530, 430);
  line(455, 375, 470, 430);
}

//draws a glass cup
function cup(stepX) {
  strokeWeight(3);
  fill(255);
  stroke(200);
  ellipse(300 + stepX, 200, 200, 30);
  line(200 + stepX, 200, 230 + stepX, 475);
  line(400 + stepX, 200, 370 + stepX, 475);
  fill(115, 231, 240, 120);
  arc(300 + stepX, 475, 140, 45, 0, PI, OPEN);
  //makes the cup look glassy
  fill(255, 100)
  noStroke();
  beginShape();
  vertex(201 + stepX, 200);
  vertex(399 + stepX, 200);
  vertex(369 + stepX, 475);
  vertex(231 + stepX, 475);
  endShape();
  fill(220, 20);
  rect(365 + stepX, 250, 10, 60);
} //step closer

//fills glass with water to the top
function water(stepX, waterX, waterY) {
  fill(115, 231, 240, 100) //blue
  beginShape();
  noStroke();
  vertex(369 + waterX + stepX, 475 - waterY);
  vertex(231 - waterX + stepX, 475 - waterY);
  vertex(231 + stepX, 475);
  vertex(369 + stepX, 475);
  endShape();
} //water closer

//creates meter to measure water level
function meter(waterLevel) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(50, 25, 500, 50);
  fill(255 - x);
  x += 1;
  //when the meter is approaching full, the meter will change random colors
  if (waterLevel > 450) {
    fill(random(0, 255), random(0, 255), random(0, 255));
  }
  rect(51, 25, 0 + waterLevel, 50);
  //sad face
  fill(255, 214, 81); //yellow
  ellipse(80, 110, 50, 50); //face
  fill(0);
  ellipse(70, 103, 5, 5); //left eye
  ellipse(90, 103, 5, 5); //right eye
  noFill();
  //as the meter becomes more full, the user becomes happier
  arc(80, 121, 25, 10, PI, TWO_PI, OPEN) //FROWN :(
    //smiley face 
  fill(255, 214, 81); //yellow
  ellipse(523, 110, 50, 50); //face
  fill(0);
  ellipse(513, 103, 5, 5); //left eye
  ellipse(533, 103, 5, 5); //right eye
  noFill();
  arc(523, 117, 25, 10, 0, PI, OPEN) //SMILE :)
} //meter closer

//when the spacebar is pressed
//the cup will be filled with water
function quench() {
  if (keyIsDown(32)) {
    waterX += .11;
    waterY += 1;
    waterLevel += 1.84;
  }
  //when the cup is full
  //then the user will be completely quenched
  if (waterY > 268) {
    fill(0);
    textFont("Georgia");
    textSize(40);
    text("QUENCHED!", 180, 150);
    fill(255);
    ellipse(480, 295, 25, 25);
    ellipse(491, 315, 25, 25);
    ellipse(509, 315, 25, 25);
    ellipse(515, 295, 25, 25);
    ellipse(498, 282, 25, 25);
    fill(255, 214, 81); //yellow
    ellipse(499, 299, 25, 25);
    
  }
} //quench closer

//when the meter and the cup is full
//the meter will reset and the cup will become empty
function reset() {
  if (waterLevel > 500) {
    waterX = 0;
    waterY = 0;
    waterLevel = 0;
  }
} //reset closer