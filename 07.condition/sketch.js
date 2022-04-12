// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   print(mouseIsPressed == true);
//   if (mouseIsPressed == false)
//   {
//     fill(0);
//   }
//   else
//   {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY,50, 50)
// }

// y = y+1 --> y +=1 --> y++ 
// y = y-1 --> y -=1 --> y++ 
// y = y*1 --> y *=1
// y = y/1 --> y /=1

// let x=0, y=0, velocity_x=10, velocity_y=20;
// function setup(){
// createCanvas(500,500);
// background(155);
// }

// function draw(){
// ellipse(x,y,50,50);
// noFill();
// stroke(255,255,255);
// x += velocity_x;
// y += velocity_y;

// if (x<0 || x>width)
//   {
//     velocity_x *= -1;
//   }
// if (y<0 || y>width)
//     velocity_y *= -1;
// 

// let x=0, velocity=1;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
// background(0);
// stroke(255);
// line(x,0,x,height);
// x +=velocity
//  if (x <0 || x > width){
//   velocity *= -1;
//  }

//  if (x<100 || x> 200){
//   ellipse(width/2, height/2,100,100);
//  }
// }

// let x,y,d,r = 50.0, tx=0.0, ty=0.5;
// function setup(){
// createCanvas(300,300);
// }

// function draw (){
//   background(0);
// x= mouseX;
// y= mouseY;
// // x = noise(tx)*width;
// // y = noise(ty)*height;
// print(tx,ty);
// d = dist(width/2, height/2, x, y);
// if (d < r) {
//   fill(random(255), random(255), random(255), 200);
// }
// ellipse(x,y,r,r);
// ellipse(width/2, height/2, r,r);
// tx += 0.01;
// ty += 0.01;
// }

// let interval=0, current_time=0, previous_time=0;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   print(millis());
//   current_time = millis();
//   interval = current_time - previous_time;
//   if(interval > 1000){
//     previous_time = millis();
//   fill(random(255),random(255),random(255));
//  }
//  ellipse(width/2, height/2,200,200);
// }

// let x=150;
// function setup (){
//   createCanvas(300,300);
// }

// function draw(){
//   background(0);
//   stroke(255);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, height/2, 50,50);
//   if (mouseX > x){
//     x++;
//   }
//   else{
//     x--;
//   }
// }

// let checkPrev=0;
// let check=0;

// function setup (){
//   createCanvas(300,300);
// }

// function draw(){
//  background(0);
//  display(mouseX,mouseY);
//  if (mouseX < width/2 && mouseY < height/2){
//    rect(0,0, width/2, height/2);
//    check = 1;
//  }
//  else if (mouseX > width/2 && mouseY < height/2) {
//    rect(width/2, 0, width, height/2);
//    check = 2;
//  } 
//  else if (mouseX < width/2 && mouseY > height/2) {
//    rect(0, height/2, width/2, height/2);
//    check = 3;
//  }
//  else
//  {
//    rect(width/2, height/2, width, height);
//    check = 4;
//  }

//  if(checkPrev!=check)
//  {
//    print("yes")
//   fill(random(255),random(255),random(255))
//   checkPrev = check;
//  }

// function display (x,y)
// {
//   if (x < width/2 && y < height/2){
//     rect(0,0, width/2, height/2);
//     check = 1;
//   }
//   else if (x > width/2 && y < height/2) {
//     rect(width/2, 0, width, height/2);
//     check = 2;
//   } 
//   else if (x < width/2 && y > height/2) {
//     rect(0, height/2, width/2, height/2);
//     check = 3;
//   }
//   else
//   {
//     rect(width/2, height/2, width, height);
//     check = 4;
//   }
 
//   if(checkPrev!=check)
//   {
//     print("yes")
//    fill(random(255),random(255),random(255))
//    checkPrev = check;
//   }
// }



// function setup() {
//   frameRate(30);
//   textSize(30);
//   textAlign(CENTER);
// }

// function draw() {
//   background(200);
//   text(frameCount, width / 2, height / 2);
// }

function setup(){
  createCanvas(300,300);
}

function draw() {
  background(0);
  if (mouseIsPressed)
  {
    if (mouseButton === LEFT)
    {
      fill(255, 0, 0);
    }
    else
    {
      fill(0, 255, 0);
    }
  }
  else
  {
    fill(0, 0, 255);
  }
  ellipse(width/2, height/2,200,200);
}


// const x = PI;
// let y= 0;

// function setup() {
//   createCanvas(300,300);
// }

// function draw() {
//   background(230);
//   arc(100,100,80,80,x,y);
// }