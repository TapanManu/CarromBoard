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
	drawLine(p1,p);
	striker.setAttribute('cx',p.x);
	striker.setAttribute('cy',p.y);
	let x1,y1;
	if(p.x==22 || p.x==405){
		length=dist(new Point(p1.x,p.y),p1);
		console.log(length);
		x1 = p1.x;
		y1 = p1.y - 2*length;
	}
	else if(p.y==25){
		length = dist(new Point(p.x,p1.y),p1);
		console.log(length);
		x1 = p1.x - 2*length;
		y1 = p1.y;
	}
	drawLine(p,new Point(x1,y1));
	striker.setAttribute('cx',x1);
	striker.setAttribute('cy',y1);
	return;
}