class Ball
{
	constructor(x,y,width,height,angle)
	{
		var options={
		
			
			frictionAir:0.0005,
			density:1
			
			}
		
		this.width=width
        this.height=height
		
		this.body=Bodies.rectangle(x,y,width,height,options)
		this.image = loadImage("Superhero-01.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var angle=this.body.angle;
			push()
			translate(this.body.position.x,this.body.position.y);
			imageMode(CENTER);					
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}
}