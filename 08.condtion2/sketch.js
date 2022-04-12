// function setup() {
//   createCanvas(300, 300);
//   background(0);
//   ellipse(width/2, height/2,200,200);
// }

// function draw() {
//   //
//   if (keyIsPressed && (key === 'a')) {
//     fill(255,0,0);
//   } else if (keyIsPressed && (key === 's')) {
//     fill(0,255,0);
//   } else if (keyIsPressed && (key === 'd') || (key === 'D')) {
//     fill(255,255,0);
//   } else {
//     fill(0,0,255);
//   }
 
// }

// let degree = 90;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if (keyIsPressed) {
//     if ((key >= '0') && (key <= '9')) {
//       degree = map(key, '0', '9', 0, 360);
//     } 
//   }
//   arc(width/2, height/2, 200,200, 0,radians(degree));
// }


// let x = 150, y = 150;
// function setup(){
//   createCanvas(300,300);
// }
// function draw(){
//   background(0);
//   if(keyIsPressed) {
//     if (key === 'a' || keyCode == LEFT_ARROW) {
//       x=x-5;
//     } else if (key === 'd' || keyCode == RIGHT_ARROW) {
//       x=x+5;
//     } else if (key === 'w' || keyCode == UP_ARROW) {
//       y=y-5;
//     } else if (key === 's' || keyCode == DOWN_ARROW) {
//       y=y+5;
//     }
//   }
//   ellipse(x,y,100,100);
// }

// function setup(){
//   createCanvas(300,300);
//   textSize(100);
//   textAlign(CENTER);
// }
// function draw(){
//   background(0);
//   fill(255);
 
//   switch(key) {
//     case 'a':
//       text('a', width/2, height/2);
//       break;
//     case 'b':
//       text('b', width/2, height/2);
//       break;
//     case 'c':
//       text('c', width/2, height/2);
//       break;
//     case 'd':
//       text('d', width/2, height/2);
//       break;
//     default:
//       text('None', width/2, height/2);
//       break;
//   }
// }

let x = 20, y=80, w=460, h=50;
let size =100, slider =20;
function setup() {
  createCanvas(500,500);
}
function draw(){
  background(0);
  if(mouseIsPressed) {
    if((x <= mouseX && mouseX <= x+w) && (y <= mouseY && mouseY <= y+h)) {
      slider = mouseX;
      size = map(slider, x, x+w,100, width);
    }
  }
 fill(0,0,255);
 ellipse(width/2, height/2, size, size);
 fill(255);
 textSize(30);
 textAlign(CENTER);
 text('Size: ' +int(size), width/2,50);
 rect(x,y,w,h);
 fill(255,0,0);
 rect(slider,y,10,h);
}