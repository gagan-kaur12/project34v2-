class Block{
    constructor(x,y){
        var options ={
            'restitution':0.6,
            'friction': 1.0,
            'density': 20
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height =50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("black");
        fill("red");
        rect(0,0,50,50);
        pop();
    }
}