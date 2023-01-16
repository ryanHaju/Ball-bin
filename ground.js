class Ground{
    constructor(x,y,w,h){
        var goop = {isStatic:true};
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,goop);
        World.add(world,this.body);
    }
    display(){
    var groundp = this.body.position;
    push();
    translate(groundp.x,groundp.y);
    stroke(255);
    fill(127);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
    }
}
