// sound when correct
let synth;

// setting a score 0
let score = 0;
// pink circle done

let pcdone = false;
// magenta circle done
  let mcdone = false;
  let grabbed = false;
  let shapeX;
  let shapeY;
  const radius = 50;
  const diameter = radius*2;

  let grabbed2 = false;
  let shapeX2;
  let shapeY2;
  const radius2 = 50;
  const diameter2 = radius2*2;

function setup() {
  createCanvas(700, 400);
  background('#AAF0D1');
  reset = background('#AAF0D1');

  shapeX = 550;
  shapeY = 100;

  shapeX2 = 550;
  shapeY2 = 300;

  //definfing synth
  synth = new p5.PolySynth();

}
//function to play the sound

function playSynth()
{
  userStartAudio();

  // note velocity (volume, from 0 to 1)
  let velocity = (0.5);
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  synth.play('G3', velocity, time, dur);
}

function draw()

{
  background('#AAF0D1')
  stroke(1);
  line(0, 200, 700, 200);

  //Pink Circle on the top left
  fill ("pink")
  strokeWeight(2);
  stroke(90);
  circle(100, 100, 100);

  //Magenta Circles on the bottom left
  strokeWeight(2);
  stroke(90);
  fill ("magenta")
  circle(100, 300, 100);

  //Drop here text on the top
  fill(0, 102, 153);
  textSize(20);
  text('Drop Here', 55, 190);


  //Drop here text on the bottom
  fill(0, 102, 153);
  textSize(20);
  text('Drop Here', 55, 390);

  //Drag towards enclosure text on bottom
  textSize(20);
  text('Drag towards enclosure', 460, 390);
  fill(0, 102, 153);


  //Drag towards enclosure text on top
  textSize(20);
  text('Drag towards enclosure', 460, 190);
  fill(0, 102, 153);

//ARROW 1 ---------------------------------------------------------
  beginShape();

  strokeWeight(2);
  stroke(90);
  //point
  vertex(350, 100);

  //top right corner
  vertex(400, 130);

  //line vertical to line above
  vertex(400, 110);

  //to the right of the vertical line
  vertex(530, 110);

  //underneath this
  vertex(530, 90);

  //underneath this line
  vertex(400, 90);

  //vertical under this line
  vertex(400, 70);
  endShape();


  //ARROW 2 --------------------------------------------------------------
  beginShape();

  strokeWeight(2);
  stroke(90);
  //first point (vertex)
  vertex(350, 300);

  //top right corner
  vertex(400, 330);

  //line vertical to line above
  vertex(400, 310);

  //to the right of the vertical line
  vertex(530, 310);

  //underneath this
  vertex(530, 290);

  //underneath this line
  vertex(400, 290);

  //vertical under this line
  vertex(400, 270);
  endShape();

  //PINK CIRCLE--------------------------------

  strokeWeight(2);
  stroke(90);
  fill ("pink")
  ellipse(shapeX, shapeY, diameter, diameter);
  // print (grabbed)

  //MAGENTA CIRCLE -------------------------
  strokeWeight(2);
  stroke(90);
  fill ("magenta")
  ellipse(shapeX2, shapeY2, diameter2, diameter2);

  //rec
  stroke('black');
  strokeWeight(2)
  fill('#AAF0D1');
  rect(610, 60, 50, 50)
  textSize(30);
  noStroke();

  // text (score, 625, 90);
  strokeWeight(2);
  stroke(90);
  fill (0, 102, 153);
  text (score, 627, 97);

  strokeWeight(2);
  stroke(90);
  text('Score', 595, 50);

 if (score == 10)
      {
      // similar to mouse released
        background('#AAF0D1')
        text('Great Job on Getting 10 in a Row!', 130, 120);
        text('Click "Next" for the next screen', 155, 300);
      }
}

function mousePressed ()

{
   let d = dist(mouseX, mouseY, shapeX, shapeY);
   let d2 = dist(mouseX, mouseY, shapeX2, shapeY2);
   if (d < radius)
    {
    grabbed = "shape1";
    } else if (d2 < radius){
      grabbed = "shape2";
    }

  else grabbed = false ;
}
  function mouseReleased ()
{
   let d = dist(mouseX, mouseY, 100, 100);
   let d2 = dist(mouseX, mouseY, 100, 300);
//circle shape
  if (d < radius && grabbed == 'shape1')
   {
     pcdone = true
   }
// magenta circle
  if (d2 < radius && grabbed == 'shape2')
   {
     mcdone = true
   }

if (pcdone == true && mcdone== true)
  {

    score++;
    parent.score_from_activity = score;
    playSynth();

    shapeX = 550;
    shapeY = 100;

    shapeX2 = 550;
    shapeY2 = 300;

    pcdone = false;
    mcdone = false;

  }
      grabbed = false;

  }

  function mouseDragged()
{
  // print ('dragged');
    if (grabbed == "shape1")

    {
    shapeX = mouseX;
    shapeY = mouseY;
    }

  if (grabbed == "shape2")

    {
    shapeX2 = mouseX;
    shapeY2 = mouseY;
    }
  }
