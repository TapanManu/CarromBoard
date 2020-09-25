function drawLine(p1,p2){
	let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
	newLine.setAttribute('id','line2');
	newLine.setAttribute('x1',p1.x);
	newLine.setAttribute('y1',p1.y);
	newLine.setAttribute('x2',p2.x);
	newLine.setAttribute('y2',p2.y);
	newLine.setAttribute("stroke", "black");
	svg.appendChild(newLine);
}

function dist(p1,p2){
	return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y));
}

function rebound_from_wall(p){
	striker.setAttribute('cx',p.x);
	striker.setAttribute('cy',p.y);

	length=dist(new Point(p1.x,p2.y),p1);
	console.log(length);
	let x1 = p1.x;
	let y1 = p1.y - 2*length;
	//console.log(x1);
	//console.log(y1);
	drawLine(p2,new Point(x1,y1));
	striker.setAttribute('cx',x1);
	striker.setAttribute('cy',y1);
	return;
}