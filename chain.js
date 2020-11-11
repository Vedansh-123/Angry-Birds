class Chain{
    constructor(bodyA,bodyB){
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness:0.04,
           length:10
       } 

this.chain=Matter.Constraint.create(options);
World.add(world,this.chain);

    }
    display(){
        strokeWeight(3)
        fill("black")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}