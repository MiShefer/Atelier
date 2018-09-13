function setup(){
	createCanvas(720,480);
	bubble = {
		x: width/2,
		y: height/2,
		r: 15
	};
}

function draw(){
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

function mouseClicked(){
	var clickeddistance = dist(width/2, height/2, mouseX, mouseY);
	if(clickeddistance < 15){
		fill(100);
	}
}