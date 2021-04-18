class Fly{
    constructor(bodyA,pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness:0.7,
          length:260
      } 
      this.pointB = pointB;
      this.fly =Constraint.create(options);
      World.add(world,this.fly);
    }
    attach(body){
        this.fly.bodyA = body;
    }
    display(){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("red");
        strokeWeight(1);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}