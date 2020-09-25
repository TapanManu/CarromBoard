let finalx,finaly;

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

function rebound_from_wall(p1,p2){
	drawLine(p1,p2);
	striker.setAttribute('cx',p2.x);
	striker.setAttribute('cy',p2.y);
	finalx = p2.x;
	finaly = p2.y
	let x1,y1;
	let flag=0
	if(p2.x<=cx_left_wall || p2.x>=cx_right_wall){
		length=dist(new Point(p1.x,p2.y),p1);
		x1 = p1.x;
		
		if(p1.y>=bottom_wall)
			y1 = p1.y - 2*length;
		else if(p1.y<=top_wall)
			y1 = p1.y + 2*length;
		else
			y1 = p1.y - 2*length;
		finalx = x1;
		finaly = y1;

		if(y1 <=top_wall || y1 >= bottom_wall)
			flag=1;
		if(flag==1){
			
			rebound_from_wall(p2,new Point(x1,400));			//400 should be changed
		}
		
		drawLine(p2,new Point(x1,y1));
	}
	else if(p2.y<=top_wall || p2.y>=bottom_wall){
		length = dist(new Point(p2.x,p1.y),p1);
		
		if(p1.x<p2.x)
			x1 = p1.x + 2*length;
		else
			x1 = p1.x - 2*length;
		y1 = p1.y;
		console.log(p2.x);
		finalx = x1;
		finaly = y1;
		if(x1<=cx_left_wall || x1>=cx_right_wall)
			flag=1;
		if(flag==1){
			
			rebound_from_wall(p2,new Point(405,p1.y));
		}
		
		drawLine(p2,new Point(x1,y1));
	}
	else
	{
		length = dist(p1,p2);
		//finalx = p2.x;
		//finaly = p2.y;

	}
	console.log(x1,y1);
	
	striker.setAttribute('cx',finalx);
	striker.setAttribute('cy',finaly);
	return;
}