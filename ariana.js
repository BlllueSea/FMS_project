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

  shapeX = 600;
  shapeY = 100;

  shapeX2 = 600;
  shapeY2 = 300;
}

function draw()

{
  background('#AAF0D1')
  line(0, 200, 700, 200);
  stroke(1);

  //Circles on the top left
  fill ("pink")
  strokeWeight(2);
  stroke(90);
  circle(100, 100, 100);

  //Circles on the bottom left
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
  text('Drag towards enclosure', 480, 390);
  fill(0, 102, 153);


  //Drag towards enclosure text on top
  textSize(20);
  text('Drag towards enclosure', 480, 190);
  fill(0, 102, 153);


 //ARROW 1 ---------------------------------------------------------
  beginShape();

  strokeWeight(3);
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

}

function mousePressed ()

{
   let d = dist(mouseX, mouseY, shapeX, shapeY);
   let d2 = dist(mouseX, mouseY, shapeX2, shapeY2);
  if (d < radius) {

    grabbed = "shape1";
    } else if (d2 < radius){
      grabbed = "shape2";
    }

  else grabbed = false ;

}
  function mouseReleased () {
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
