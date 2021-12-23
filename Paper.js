class Paper{
    constructor()
	{
        this.image=loadImage("paper.png")     

		 var options={
		isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2

       

       }
	   Paper = Bodies.circle(50,200,20)
	   Paper.add(world,paperObjet)

	   
}

display()
	{

			push()

			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			pop()
			
	}


    }