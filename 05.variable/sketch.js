let x = 300, y = 200, c = 0, d = 100;

function setup() {
  createCanvas(700, 400);
}

    
function draw() {
  background(0);

  stroke(255);
  textSize(50);
  text("distance:"+x, 100,50);
  text("color:"+c, 400, 50)

  push();
  stroke(255,255,0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  fill(c, 0, 0); 
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);
  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);
  pop();

  x +=5;
  x %=700;
  c +=15;
  c %=255;

  print("distance \"영희야 안녕\" \n \"메롱\" \ ")
}
