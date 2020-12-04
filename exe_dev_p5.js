// general variable declarations

let circle1Done = false;
let circle2Done = false;
let grabbed = false;
let shapeX1;
let shapeY1;
let shapeX2;
let shapeY2;
let synth;
const radius1 = 20;
const diameter1 = radius1*2;
const radius2 = 20;
const diameter2 = radius2*2;
let score = 0;



// setup function

function setup() {
  createCanvas(700, 400);
  reset = background("#AAF0D1");
  shapeX1 = 120;
  shapeY1 = 100;
  shapeX2 = 120;
  shapeY2 = 270;
  synth = new p5.PolySynth();

}


// sound function

function playSynth() {

  userStartAudio();

  // note velocity (volume, from 0 to 1)
  let velocity = (0.5);
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  synth.play('G3', velocity, time, dur);

}
// draw function

function draw() {

  // Background Color

  background("#AAF0D1");

  //rectangle
  stroke('black');
  strokeWeight(2)
  fill('#AAF0D1');
  rect(610, 60, 50, 50)
  noStroke();

  // Line Work for the Circle
  strokeWeight(2);
  stroke(90);

  line(140, 100, 220, 120);

  line(220, 120, 260, 90);

  line(260, 90, 320, 130);

  line(320, 130, 370, 80);

  line(370, 80, 410, 120);

  line(410, 120, 480, 95);

  line(480, 95, 560, 110);

  // line work for the Square

  line(140, 260, 220, 210);

  line(220, 210, 260, 280);

  line(260, 280, 320, 220);

  line(320, 220, 370, 265);

  line(370, 265, 450, 245);

  line(450, 245, 495, 260);

  line(495, 260, 560, 255);

    // Blue circle on the top

  fill("#008080");
  strokeWeight(2);
  stroke(90);
  ellipse(shapeX1, shapeY1, diameter1, diameter1);

  // Maron Circle on the bottom

  fill("#800000");
  ellipse(shapeX2, shapeY2, diameter2, diameter2);

  strokeWeight(2);
  stroke(90);
  fill(0, 102, 153);
  textSize(25);
  text('Use the mouse to drag the objects along the defined paths.', 33, 365);

  // text

  strokeWeight(2);
  stroke(90);
  textSize(30);
  text('Score', 595, 50);

  strokeWeight(2);
  stroke(90);
  fill (0, 102, 153);
  text (score, 627, 97);

  if (score == 10) {

  background('#AAF0D1')
  text('Great Job on Getting 10 in a Row!', 130, 120);
  text('Click "Next" for the next screen', 155, 300);
  }

}

// mousePressed funtion

function mousePressed () {

   let d1 = dist(mouseX, mouseY, shapeX1, shapeY1);
   let d2 = dist(mouseX, mouseY, shapeX2, shapeY2);

   if (d1 < radius1) {

    grabbed = "shape1";

    }

  else if (d2 < radius2) {

    grabbed = "shape2";

    }

  else grabbed = false

}
// funtion mouseReleased

  function mouseReleased () {

   let d1 = dist(mouseX, mouseY, 560, 110);
   let d2 = dist(mouseX, mouseY, 560, 255);

//circle shape
  if (d1 < radius1 && grabbed == 'shape1') {

     circle1Done = true

   }
// magenta circle
  if (d2 < radius2 && grabbed == 'shape2') {

     circle2Done = true

   }

if (circle1Done == true && circle2Done == true) {

    score++;
    parent.score_from_activity = score;
    playSynth();

    shapeX1 = 120;
    shapeY1 = 100;

    shapeX2 = 120;
    shapeY2 = 270;

    circle1Done = false;
    circle2Done = false;

  }
      grabbed = false;

  }



  function mouseDragged()
{
  // print ('dragged');
    if (grabbed == "shape1")

    {
    shapeX1 = mouseX;
    shapeY1 = mouseY;
    }

  if (grabbed == "shape2")

    {
    shapeX2 = mouseX;
    shapeY2 = mouseY;
    }
  }
