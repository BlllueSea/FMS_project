// Adapted from Learning Processing by Daniel Shiffman
// http://www.learningprocessing.com
// SoundEffect sample by Corsica_S via freesound.org,
// Creative Commons BY 3.0

// A Class to describe a "soundeffect" (really a button)
class SoundEffect {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // Is a point inside the soundeffect? (used for mouse rollover, etc.)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // Show the soundeffect (hardcoded colors, could be improved)
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

// A sound file object
let dingdong;

// A soundeffect object (that will trigger the sound)
let soundeffect;

let shape1;
let shape2;

function setup() {
  createCanvas(700, 400);

  // Load the sound file.
  // We have included both an MP3 and an OGG version.
  soundFormats('mp3', 'ogg');
  dingdong = loadSound('assets/soundeffect.mp3');
  // Create a new soundeffect
  soundeffect = new SoundEffect(width / 2, height / 2, 32);

  // Create object
  shape1 = new Draggable(100, 100, 50, 50);
  // shape2 = new Draggable(150, 100, 50, 50);
}

function draw() {
  background(255);
  // Show the soundeffect
  soundeffect.display(mouseX, mouseY);

  // objects
  shape1.over();
  shape1.update();
  shape1.show();
  shape2 = rect(100, 100, 50, 50);
  shape2.show()
  // shape2.over();
  // shape2.update();
  // shape2.show();
}

function mousePressed() {
  // If the user clicks on the soundeffect, play the sound!
  if (soundeffect.contains(mouseX, mouseY)) {
    dingdong.play();
  }

  shape1.pressed();
  // shape2.pressed();
}

function mouseReleased() {
  shape1.released();
  // shape2.released();
}
