class Laser{
constructor(playerPos,angle){
this.position = createVector(playerPos.x , playerPos.y);
this.velocity = p5.vector.fromAngle(angle) 
this.velocity.mult(5)
}
update(){
this.position.add(this.velocity)
}





}