var mouseclicks = [];

function setup(){
	createCanvas(720,480);
	var button = createButton('add particle');
	button.mousePressed (addParticle);
	noStroke();
	setTimeout(1000, gosomeplaceelse);
}

function draw(){
	translate(width/2, height/2);
	for(var i = 0; i < mouseclicks.length; i++){
		fill(mouseclicks[i].color);
		ellipse(mouseclicks[i].x, mouseclicks[i].y, 10);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
	}
}

function addParticle(){
	var clickposition = {
		x: 0,
		y: 0,
		xspeed: random(-2,2),
		yspeed: random(-2,2),
		color: color(random(255), random(255), random(255))
	}
	mouseclicks.push(clickposition);
}

function mouseClicked(){
	console.log("clicked");
}