class Board{
	constructor(l,b){
			this.length=l;
			this.breadth=b;
			this.centre={
				x:0,
				y:0
			}
			this.circles=[]
		}
	view(){
		//define views
		let c = document.querySelector("canvas");
		let holes = []
		for(let i=0;i<4;i++){
			holes[i]=new Hole(i,c);
			holes[i].drawHole(c);
		}

		let value=68.5
		this.circles.push({x:68.5,y:68.5,valuex:value,valuey:value});
		this.circles.push({x:c.width-68.5,y:68.5,valuex:-value,valuey:value});
		this.circles.push({x:68.5,y:c.height-68.5,valuex:value,valuey:-value});
		this.circles.push({x:c.width-68.5,y:c.height-68.5,valuex:-value,valuey:-value});

		for(let i=0;i<4;i++)	this.drawCirclesLines(c,this.circles[i]);

		this.board_center(c);
		this.baselines(c);
	}
	board_center(canvas){
		this.centre.x=this.breadth/2;
		this.centre.y=this.length/2;
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(this.centre.x,this.centre.y,15, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(this.centre.x,this.centre.y,40, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(this.centre.x,this.centre.y,45, 0, 2 * Math.PI);
		ctx.stroke();
	}
	baselines(canvas){
		let ctx = canvas.getContext("2d");
		ctx.strokeRect(60, 60, canvas.width-120, canvas.height-120);
		ctx.strokeRect(75, 75, canvas.width-150, canvas.height-150);
	}
	drawCirclesLines(canvas,circle){
		let ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.fillStyle="#260505";
		ctx.arc(circle.x,circle.y,14, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.arc(circle.x+circle.valuex,circle.y+circle.valuey,17, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle="#c95151";
		ctx.arc(circle.x+circle.valuex,circle.y+circle.valuey,16, 0, 2 * Math.PI);
		ctx.fill();

		

		ctx.beginPath();
		ctx.fillStyle="#260505";
		ctx.arc(circle.x,circle.y,13, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle="#f0e2e1";
		ctx.arc(circle.x,circle.y,11, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle="#fcf7f7";
		ctx.arc(circle.x,circle.y,10, 0, 2 * Math.PI);
		ctx.fill();	
		let headlen=8;

		let fromx = circle.x;
		let fromy = circle.y;
		let tox = circle.x+circle.valuex;
		let toy = circle.y+circle.valuey;
		let angle = Math.atan2(toy-fromy,tox-fromx);	  
		ctx.beginPath();
	    ctx.moveTo(fromx, fromy);
	    ctx.lineTo(tox, toy);
	    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
	    ctx.moveTo(tox, toy);
	    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));	   
	    ctx.stroke();
	    
	}
	

}
new Board(500,500).view();