var value = 0;
function setup(){
	createCanvas(720,480);
	var button = createButton('Increase')
	button.mousePressed(addbubble);
	bubble = {
		x: width/2,
		y: height/2,
		r: 15

	};
}

function draw(){
	ellipse(bubble.x, bubble.y, bubble.r*2);
	fill(value);
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
	if(bubble.x > width || bubble.x < 0){
		bubble.y = height/2;
		bubble.x = width/2;
	}
	if(bubble.y > height|| bubble.y < 0){
		bubble.y = height/2;
		bubble.x = width/2;
	}
}

function addbubble(){
	ellipse(bubble.x, bubble.y, bubble.r*2);
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
	if(bubble.x > width || bubble.x < 0){
		bubble.y = height/2;
		bubble.x = width/2;
	}
	if(bubble.y > height|| bubble.y < 0){
		bubble.y = height/2;
		bubble.x = width/2;

	}
}
function keyPressed(){
	if (value === 0){
		value = 185;
	} else {
		value = 0;
	}
}