let bomb;

let stoneColumnCount = 16;
let stoneRowCount = 6;
let OffsetTop = 300;
let d = 50;

let stones = [];
for(let i = 0; i<=stoneColumnCount; i++){
  stones[i] = [];
  for(let j=0; j<=stoneRowCount; j++){
    stones[i][j] = { x:0, y:0, status:1 }
  }
}

let myFont;
let SCORE = 0;
let time = 30;
let p_x= 0 ,velocity_x = 3;

let playcheck = 0;
let button;

function preload(){
  myFont = loadFont('assets/prstartk.ttf');
}

function setup() {
  button = createButton('Start');
  createCanvas(800, 600);
  frameRate(60);
  textSize(30);
  textAlign(LEFT);
  textFont(myFont);
  bomb = new Bomb();
  setInterval(timeIt,1000);
}

function draw() {
  background(127.5);
  text('score:'+ SCORE, 0, 30);
  rect(p_x,100,80,60);
  p_x += velocity_x;
  // x++;
  if (p_x<0 || p_x>width)
  {
    velocity_x *= -1;
  }
  text(time, width-50, 30);
  drawStones();
  bomb.draw();
  bomb.move();
  collision();
  EndOfGame();
}

function drawStones(){
  for(let i = 0; i<=stoneColumnCount; i++){
    for(let j = 0; j<=stoneRowCount; j++){
      if(stones[i][j].status == 1){
      let stoneX = i*d;
      let stoneY = j*d+OffsetTop;
      stones[i][j].x = stoneX;
      stones[i][j].y = stoneY;
      circle(stoneX, stoneY, d);
      }
    }
  }
}

function collision(){
  for(let i =0; i<=stoneColumnCount; i++){
    for(let j=0; j<=stoneRowCount; j++ ){
      let currentStone = stones[i][j];
      dis = dist(currentStone.x,currentStone.y,
        bomb.position.x,bomb.position.y);
        if(currentStone.status == 1){
          if(dis<(bomb.d+50)/2){
            SCORE++;
            currentStone.status = 0;
        }
      }
    }
  }
}


function keyPressed(){
  if(key == ' ') {bomb.call();}
}

function timeIt(){
  if(time>0){
    time--;
  }
}

function reset(){
  playcheck++;
  button.hide();
}


function EndOfGame(){
  if(time<=0){
    background(255);
    push();
    fill(255);
    rect(0,0,width,height);
    fill(0);
    textAlign(CENTER);
    text("YOUR SCORE IS "+ SCORE, width/2,height/2);
    textSize(20);
    text("Go for high score!, plz press F5", width/2,height/2+30 )
    noLoop();
    pop();
  }

  if(playcheck == 0){
    background(255);
    push();
    fill(255);
    rect(0,0,width,height);
    noStroke();
    fill(0);
    textAlign(CENTER);
    text("Canyon Bomber", width/2, height/2);
    text('Press the button', width/2, height/2+30);
    pop();
    button.center();
    button.position(width/2-30,height/2+40);
    button.mousePressed(reset);
  }
}
