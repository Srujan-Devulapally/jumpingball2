class Circle{
constructor(x,y,width,) {
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.image = loadImage("trash.png")
this.body=Bodies.circle(x,y,width,options)
World.add(world,this.body);



}

display(){
imageMode()
image(this.image,this.body.position.x,this.body.position.y,this.body.position.width)



}









}