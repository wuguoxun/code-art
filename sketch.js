

function preload() {
  before = loadImage('1.png');
  after = loadImage('2.png');
  img1 = loadImage('fist.png');
  punch = loadSound("woosh.mp3");

}

function setup() {
  createCanvas(600, 500);
  noCursor();

}

function draw() {



  if ((mouseX >= 300)&&(mouseX <=450)&&(mouseY <200)){
  noTint();
  imageMode(CORNER);
  background(255);
  background(before);
  }



  else {

  imageMode(CORNER);
  noTint();
  background(0);
  background(after);
  }



  noTint();
  imageMode(CENTER);
  image(img1,mouseX,mouseY,120,150);



}

function mousePressed() {
punch.play();

}
