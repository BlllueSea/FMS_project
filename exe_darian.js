// variables
let synth;
let rectwidth;
let word;
let lettersCorrect;
let keyX;
let score = 0;
// Get a random element from an array using the random(Array) syntax
let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// load "keyboard" into sketch
var keyboard;
function preload() {

  keyboard = loadImage("assets/keyboard_trans.png");
}

function setup() {
  createCanvas(700, 400);
  textSize(60);
  fill(255);
  background('#AAF0D1')
  rectWidth = width / 16;
  image (keyboard, 80, height / 1.9, keyboard.width * 0.85, keyboard.height * 0.85)

  synth = new p5.PolySynth();

  textSize(40);
  textFont('Georgia');
  text('type the letters below', 160, 50)
  textSize(30)
  text('Score', 600, 50)

  // letter function  (draw)
  updateLetter();
}

// play sound after correct input
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

// update letters after correct input
function updateLetter() {
  // letter function  (draw)
   fill('#2ab56c');
  textSize(60)
  noStroke();
    word = random(letter); // select random word
    text(word, 220, 120); // draw the letter
    word = word + random(letter); // select random word
    text(word.charAt(1), 320, 120); // draw the letter
    word = word + random(letter); // select random word
    text(word.charAt(2), 420, 120); // draw the letter
  lettersCorrect = 0;
}

// check if input is correct
function keyTyped() {
  keyX = 220;
    for(let i = 0; i < word.length; i++) {
      if(key === word.charAt(i)) {
        fill('black');
        textSize(60)
        text(key, keyX + (i * 100), 120);
        lettersCorrect++;
      }
    }
  if(lettersCorrect == 3) {
    score++;
    parent.score_from_activity = score;
    stroke('black');
    strokeWeight(2)
    fill('#AAF0D1');
    rect(195, 65, 295, 75)
    rect(610, 60, 50, 50)
    updateLetter();
    textSize(30)
    noStroke();
    text (score, 625, 90)
    playSynth();
  }
}


// letter function
function draw() {
}

//key function
function keyPressed() {
  if (keyCode === SHIFT || keyCode === CONTROL || keyCode === TAB) {
    // If it's not a letter key, clear the screen
  } else {
    noStroke()
     fill('#AAF0D1')
    rect(315, 145, 60, 65)
    fill('black')
    textSize(50)
    text(key, 320, 190); // Draw at coordinate (20,75)
  }
}
