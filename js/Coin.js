class Coin{
	constructor(canvas,rad,color,xpos,ypos){
		this.x=xpos;
		this.y=ypos;
		this.rad=rad;
		this.color=color;
		this.pts;			//points associated when it falls into hole
		this.state = false;			//rest state
		this.view();
	}
	view(){
		let c = document.querySelector("canvas");
		let ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle=this.color;
		ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
		ctx.fill();
	}
	
}
