// //Global variable
// let x = 0;

// function setup() {
//   createCanvas(300, 300);
//   background(200);
// }

// function draw() {
//   // local variable
  
//   let y = 150;
//   let d = 30;
//   ellipse(x,y,d,d);
//   x++;
//   print(x);
// }

// let x=30, y=30;
// let velocity_x =1, velocity_y =1;
// let accel_x = 0.2, accel_y=0.2;
// let friction = 0.99;

// function setup() {
//     createCanvas(400, 400);
//     frameRate(120); // try to change
// }

// function draw() {
//  background(200);
//  ellipse(x,y,30,30);

//  //  velocity_x += accel_x;
//  //  velocity_y += accel_y;

//  velocity_x +=friction;
//  velocity_y +=friction;
 
//  x += velocity_x;
//  y += velocity_y;
// textSize(15);
// text(frameCount + ' : ' + frameRate(), 10,30);
// }

// frameCount: 프레임 그리기

// let x=150, y=150;
// let friction = 0.99;
// let theta = 0.0;
// function setup() {
//  createCanvas(400, 400);
//  frameRate(60); // try to change
// }
// function draw() {
//   background(200);
//   let y = map(sin(theta), -1, 1, 0, height);
//   height/2 + height/2 * cos(theta)

//   ellipse(x,y,30,30);
//   fill(255,255,0);
//   theta +=0.1;
// }



// let x=150, y=150;
// let d=30
// let degree = 0.0;

// let friction = 0.99;
// let theta = 0.0;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }
// function draw() {
//   background(200);
//   let theta = radians(degree);
//   let x = height/2 + height/2 * sin(theta)
//   // line(x,y-d,x,y+d);
//   ellipse(x,y,d,d);
//   degree +=10;
//   fill
//   theta +=0.3;
// }



// function setup() {
//   createCanvas(500, 500);
//   background(0);
// }
// function draw() {
//   stroke(255,255,0);
//   line(pmouseX,pmouseY,mouseX,mouseY);
//   //print(random(255));
//   // ellipse(mouseX, mouseY, 50,50);
//   // point(mouseX, mouseY); // the system variable
//   // print(mouseX, mouseY);
// }

let theta = 0, r=150
function setup(){
  createCanvas(400,400);
  background(0);
}
function draw(){
  let x =width/2 + r*cos(theta)
  let y = height/2 + r*sin(theta)
  ellipse(x,y,30,30);
  theta += 0.05

  stroke(random(255),random(255),random(255));
  strokeWeight(10);
}