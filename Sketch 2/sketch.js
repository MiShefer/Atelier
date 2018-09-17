// var rgb = 0;

function setup(){
	createCanvas(720,480);
	noStroke();
}

function draw(){
	background(255);
	// fill(rgb);
	rect(720/2, 480/2, 100, 100);
}

function keyTyped(){
	if (key === 'a'){
		fill(51,204,255);
	} else if (key === 'b'){
		fill(0);
	} else if (key === 'c'){
		fill(255,102,102);
	} else if (key === 'd'){
		fill(0,204,0);
	} else if (key === 'e'){
		fill(255,205,0);
	} else if (key === 'f'){
		fill(0,0,153);
	} else if (key === 'g'){
		fill(102,0,153);
	} else if (key === 'h'){
		fill(102,51,0);
	} else if (key === 'i'){
		translate(20, 20);
	} else if (key === 'j'){
		ellipse(720/2, 480/2, 100, 100);
	} else if (key === 'k'){
		rect(720/2, 480/2, 100, 100);
	} else if (key === 'l'){
		fill(255,204,51);
	} else if (key === 'm'){
		stroke(3);
	} else if (key === 'n'){
		stroke(10);
	} else if (key === 'o'){
		noStroke();
	} else if (key === 'p'){
		rotate(PI/3.0);
	} else if (key === 'q'){
		scale(50,50);
	} else if (key === 'r'){
		scale(100,100);
	} else if (key === 's'){
		fill(255,102,0);
	} else if (key === 't'){
		fill(0,102,0);
	}
}