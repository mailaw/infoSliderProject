var canvas;
var mic;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

/*var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("section1");*/

function setup() { 
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  mic = new p5.AudioIn();
  mic.start();
} 



function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
    
  /*background(175);
  var vol = mic.getLevel();
  ellipse(width / 2, height / 2, vol * width);*/
}