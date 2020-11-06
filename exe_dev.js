function setup() {
  createCanvas(650, 400);
}

function draw() {
  
  // Background Color
  
  background("#AAF0D1");
  
  // Ellipse
  
  noStroke();
  fill("#2AB56C");
  ellipse(120, 100, 100, 100);
  
  // Square
  
  fill("#2AB56C");
  square(73, 200, 100);
  
  // Text
  
  textSize(22);
  text('Use the mouse to drag the objects along the defined paths.', 33.5, 355);
  fill(0, 102, 153);
  
  // Line Work for the Circle
  
  stroke("#2AB56C");
  
  line(120, 100, 220, 120);
  
  line(220, 120, 260, 90);
  
  line(260, 90, 320, 130);
  
  line(320, 130, 370, 80);
  
  line(370, 80, 410, 120);
  
  line(410, 120, 480, 95);
  
  line(480, 95, 560, 110);
  
  // line work for the Square
  
  line(120, 270, 220, 210);
  
  line(220, 210, 260, 280);
  
  line(260, 280, 320, 220);
  
  line(320, 220, 370, 265);
  
  line(370, 265, 450, 245);
  
  line(450, 245, 495, 260);
  
  line(495, 260, 560, 255);
  
  
  
 
}
