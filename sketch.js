function setup() {
  createCanvas(600, 600);
  background("red");
}

function draw() {
  stroke("blue");
  fill("black");
  
    // consele. log(mouseIspressed)
  
   if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
   }
}
