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
var pat

function preload() {

  keyboard = loadImage("assets/keyboard_trans.png");
}

// letter function

function setup() {
  createCanvas(700, 400);
  textSize(60);
  fill(255);
  background('#AAF0D1')
  rectWidth = width / 16;
  image (keyboard, 80, height / 1.9, keyboard.width * 0.85, keyboard.height * 0.85)

  synth = new p5.PolySynth();

  strokeWeight(2);
  stroke(90);
  fill(0, 102, 153);
  //textSize(20);
  textSize(40);
  textFont('Georgia');
  text('Type the Letters Below', 155, 50)
  textSize(30)
  text('Score', 600, 50)
  text('Goal', 40, 50)
  text('10', 55, 90)
  // Letter rectangle
  stroke('black');
  strokeWeight(2)
  fill('#AAF0D1');
  rect(195, 65, 295, 75)
  // Score rectangle
  rect(610, 60, 50, 50)
  noStroke();

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
  let dur = 0.4

  synth.play('G3', velocity, time, dur);
}

// update letters after correct input
function updateLetter() {
  // letter function  (draw)
  strokeWeight(2);
  stroke(90);
  fill('#00BFFF');
  textSize(60)
    word = random(letter);          // select random word
    text(word, 220, 120);           // draw the letter
    word = word + random(letter);   // select random word
    text(word.charAt(1), 320, 120); // draw the letter
    word = word + random(letter);   // select random word
    text(word.charAt(2), 420, 120); // draw the letter
  lettersCorrect = 0;

    //let wordX = 220
    //for(let i = 0; i < 3; i++) {
    //word = word + random(letter)
    //text(word, wordX, 120);
    //wordX += 100
    //}

  lettersCorrect = 0;
}

// check if input is correct
function keyTyped() {
  keyX = 220;
    for(let i = 0; i < word.length; i++) {
      if(key === word.charAt(i)) {
        fill('black');
         strokeWeight(2);
         stroke(90);
         fill("grey");
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
    strokeWeight(2);
    stroke(90);
    fill('#00BFFF');
    textSize(30)
    text (score, 625, 90)
    playSynth();
  }
   if(score === 10) {
     fill (0, 102, 153);
     background('#AAF0D1')
     text('Great Job on Getting 10 in a Row!', 130, 120);
     text('Click "Next" for the next screen', 155, 300);
   }
}


function draw() {
}

//key function
function keyPressed() {
  if (keyCode === SHIFT || keyCode === CONTROL || keyCode === TAB || keyCode === 20 || keyCode === ENTER || keyCode === ALT       || keyCode === BACKSPACE || keyCode === 220 || keyCode === 188 || keyCode === 190 || keyCode === 191 || keyCode ===         186 || keyCode === 222 || keyCode === 219 || keyCode === 221 || keyCode === 91 || keyCode === 93 || keyCode === 192) {
    // If it's not a letter key, do nothing / IN PROGRESS
  } else {
    noStroke()
    fill('#AAF0D1')
    rect(315, 145, 60, 65)
    strokeWeight(2);
    stroke(90);
    fill (0, 102, 153);
    textSize(50)
    text(key, 320, 190); // Draw at coordinate (20,75)
  }
}
