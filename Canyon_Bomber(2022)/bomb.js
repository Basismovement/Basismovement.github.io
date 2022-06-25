class Bomb {
    constructor(){
        this.c = color(255,0,0);
        this.position = createVector(p_x+40, 150);
        this.velocity = createVector(0,0);
        this.accel = createVector(0,0);
        this.gravity = createVector(0,0.5);
        this.force = createVector(random(-10,10), random(-10,10));
        this.friction = 0.99;
        this.d = 10;
        this.accel.add(this.force);
    }
    draw(){
        push();
        fill(this.c);
        circle(this.position.x,this.position.y,this.d);
        pop();
    }
    move(){
            this.accel.add(this.gravity);
            this.velocity.mult(this.friction);
            this.velocity.add(this.accel);
            this.position.add(this.velocity);
            this.accel.mult(0);
            if(this.position.x<0) {
                this.position.x = 0;
                this.velocity.x *= -1;
            }
            if(this.position.x> width){
                this.position.x= width;
                this.velocity.x *= -1;
            }
        }
    call(){
        this.position = createVector(p_x+40,150);
        this.velocity = createVector(0,0);
        this.accel = createVector(0,0);
        this.gravity = createVector(0,0.3);
        this.force = createVector(random(-10,10), random(-10,10));
        this.friction = 0.99;
        this.d = 10;
        this.accel.add(this.force);
    }
  }