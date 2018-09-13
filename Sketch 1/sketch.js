var value = 0;
function setup() {
	createCanvas (720,480);
}

function draw() {
	fill(mouseX, mouseY, 80);

	if (mouseIsPressed){
		background(value, 0);
		for(var i = 0; i < 10; i++){
			rect(mouseX+random(30), mouseY+random(30), 50, 50);
		}
	} else {
		background(value, 30);
		for(var i = 0; i < 10; i++){
			ellipse(mouseX+random(30), mouseY+random(30), 50, 50);
		}
	}
}

/// SOURCED CODE : https://p5js.org/reference/#/p5/mouseMoved
function mouseMoved() {
  value = value + 3;
  if (value > 255) {
    value = 0;
  }
}