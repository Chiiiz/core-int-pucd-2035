/*
 * @name Continous Lines
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
  stroke(300,90,120);
  strokeWeight(10);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}



