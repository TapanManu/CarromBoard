class Board{
	constructor(){
		this.length;
		this.breadth;
		//define pockets
		}
	init(){
		//define views
		let c = document.querySelector("canvas");
		let holes = []
		for(let i=0;i<4;i++){
			console.log(i);
			holes[i]=new Hole(i,c);
			holes[i].drawHole(c);
		}
	}
}
new Board().init();