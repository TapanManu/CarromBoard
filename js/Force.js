let finalx,finaly,prev;
let flag=0;
let count=0;
let exit=0;
function drawLine(p1,p2,color){
	let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
	newLine.setAttribute('id','line2');
	newLine.setAttribute('x1',p1.x);
	newLine.setAttribute('y1',p1.y);
	newLine.setAttribute('x2',p2.x);
	newLine.setAttribute('y2',p2.y);
	newLine.setAttribute("stroke", color);
	svg.appendChild(newLine);
}

function dist(p1,p2){
	return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y));
}

function rebound_from_wall(p1,p2){
	count++;
	drawLine(p1,p2,"black");
	
	finalx = p2.x;
	finaly = p2.y;
	let x1,y1;
	prev = new Point(p1.x,p1.y);
	flag=0
	if(p2.x<=cx_left_wall || p2.x>=cx_right_wall){
		length=dist(new Point(p1.x,p2.y),p1);
		x1 = p1.x;
		console.log(p2.x + " " + p2.y);
		if(p1.y>=bottom_wall)
			y1 = p1.y - 2*length;
		else if(p1.y<=top_wall)
			y1 = p1.y + 2*length;
		else
			y1 = p1.y - 2*length;
		if(p2.x>=cx_right_wall)
			p2.x = cx_right_wall;
		if(p2.x<=cx_left_wall)
			p2.x = cx_left_wall;
		finalx=p2.x;

		prev = new Point(finalx,finaly);
		if(checkHoles(prev)){
				console.log("in hole");
				exit=1;
				striker.setAttribute('cx',finalx);
				striker.setAttribute('cy',finaly);
				return;
			}
		finalx = x1;
		finaly = y1;

		if(y1 <= top_wall) 
			flag=1;
		if( y1 >= bottom_wall)
			flag=2;
		if(flag==1){
			if(checkHoles(new Point(x1,top_wall))){
				console.log("in hole");
				striker.setAttribute('cx',x1);
				striker.setAttribute('cy',top_wall);
				exit=1;
				return;
			}				
			rebound_from_wall(p2,new Point(x1,top_wall));
			
			count--;
		}
		if(flag==2){
			if(checkHoles(new Point(x1,bottom_wall))){
				console.log("in hole");
				exit=1;
				striker.setAttribute('cx',x1);
				striker.setAttribute('cy',bottom_wall);
				return;
			}			
			rebound_from_wall(p2,new Point(x1,bottom_wall));
			
			count--;
		}
		
		//drawLine(p2,new Point(x1,y1),"red");
	}
	else if(p2.y<=top_wall || p2.y>=bottom_wall){
		length = dist(new Point(p2.x,p1.y),p1);
		
		if(p1.x<p2.x)
			x1 = p1.x + 2*length;
		else
			x1 = p1.x - 2*length;
		y1 = p1.y;
		//console.log(p2.x);
		prev = new Point(finalx,finaly);
		if(checkHoles(prev)){
				console.log("in hole");
				exit=1;
				striker.setAttribute('cx',finalx);
				striker.setAttribute('cy',finaly);
				return;
			}
		finalx = x1;
		finaly = y1;
		if(x1<=cx_left_wall) 
			flag=1;
		if(x1>=cx_right_wall)
			flag=2;
		if(flag==1){
			if(checkHoles(new Point(cx_left_wall,p1.y))){
				console.log("in hole");
				exit=1;
				striker.setAttribute('cx',cx_left_wall);
				striker.setAttribute('cy',p1.y);
				return;
			}
			rebound_from_wall(p2,new Point(cx_left_wall,p1.y));
			
			count--;
		}
		if(flag==2){
			if(checkHoles(new Point(cx_right_wall,p1.y))){
				console.log("in hole");
				exit=1;
				striker.setAttribute('cx',cx_right_wall);
				striker.setAttribute('cy',p1.y);
				return;
			}
			rebound_from_wall(p2,new Point(cx_right_wall,p1.y));
			
			count--;
		}
		
		//drawLine(p2,new Point(x1,y1),"red");
	}
	else
	{
		length = dist(p1,p2);
		//finalx = p2.x;
		//finaly = p2.y;
		//drawLine(p1,new Point(finalx,finaly));

	}
	//console.log(x1,y1);
	
	striker.setAttribute('cx',finalx);
	striker.setAttribute('cy',finaly);

	if(exit==1){
		drawLine(p1,new Point(finalx,finaly) ,"black");
	}

	if(count==1)
		drawLine(prev,new Point(finalx,finaly),"black");
	return;
}