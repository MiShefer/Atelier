// Code Sourced https://p5js.org/reference/#/p5/mouseDragged
/// CODE SOURCED FROM GOOGLE CHROME https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
document.querySelector('button').addEventListener('click', function() {
  var context = new AudioContext();
  // Setup all nodes

});
function setup(){
	createCanvas(720,480);
	ele = createAudio('ArticMonkeys_Too_Much_To_Ask.wav');
}

function draw(){
	background(25);
	rect(width/2, height/2, 100, 100);
}

function mouseMoved(){
	ele.speed(mouseX);
	ele.volume(mouseY);
}

function mouseDragged(){
	fill(mouseX, mouseY);
}