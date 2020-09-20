class Hole{
	constructor(index,canvas){
		this.rad = 15;
		this.num = index;
		
		if(index==0){
			this.x = 20;
			this.y = 20;
		}
		if(index==1){
			this.x = canvas.width - 20;
			this.y = 20;
		}
		if(index==2){
			this.x = 20;
			this.y = canvas.height-20;
		}
		if(index==3){
			this.x = canvas.width-20;
			this.y = canvas.height-20;
		}

	}
	drawHole(canvas){
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle="#402a2a";
		ctx.arc(this.x,this.y,this.rad, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
	}
}


