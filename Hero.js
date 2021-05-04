class Hero {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
        density:1,
    frictionAir:1
}

this.width= width
        this.height= height
        this.image=loadImage("Superhero-01.png")
        this.body= Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)
    }
display(){
    var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			 imageMode(CENTER)
             image(this.image,0,0,this.width,this.height)
             pop ();
}
}