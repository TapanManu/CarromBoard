let finalx,finaly,prev;
let flag=0;
let count=0;
let exit=0;


function dist(p1,p2){
	return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y));
}


function rebound_from_wall(p1,p2,cn){
	count++;

	finalx = p2.x;
	finaly = p2.y;
	let x1,y1;
	prev = new Point(p1.x,p1.y);
	flag=0
	if(p2.x<=cx_left_wall || p2.x>=cx_right_wall){
		length=dist(new Point(p1.x,p2.y),p1);
		x1 = p1.x;
		//console.log(p2.x + " " + p2.y);
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
		
		move(x1,y1,cn);
	
		//prev = new Point(finalx,finaly);
		
		finalx = x1;
		finaly = y1;

		if(y1 <= top_wall) 
			flag=1;
		if( y1 >= bottom_wall)
			flag=2;
		if(flag==1){
						
			rebound_from_wall(p2,new Point(x1,top_wall));
			
			count--;
		}
		if(flag==2){
					
			rebound_from_wall(p2,new Point(x1,bottom_wall));
			
			count--;
		}
		
		//draw(p2,new Point(x1,y1),"red");
	}
	else if(p2.y<=top_wall || p2.y>=bottom_wall){
		length = dist(new Point(p2.x,p1.y),p1);
		if(p2.y<=top_wall)
			p2.y = top_wall;
		else if(p2.y>=bottom_wall)
			p2.y = bottom_wall;
		if(p1.x<p2.x)
			x1 = p1.x + 2*length;
		else
			x1 = p1.x - 2*length;
		y1 = p1.y;
		
		move(x1,y1,cn);
		//prev = new Point(finalx,finaly);
		
		finalx = x1;
		finaly = y1;
		if(x1<cx_left_wall) 
			flag=1;
		if(x1>=cx_right_wall)
			flag=2;
		
		if(flag==1){
			
			rebound_from_wall(p2,new Point(cx_left_wall,p1.y));
			
			count--;
		}
		if(flag==2){
			
			rebound_from_wall(p2,new Point(cx_right_wall,p1.y));
			
			count--;
		}
		
		//draw(p2,new Point(x1,y1),"red");
	}
	else
	{
		length = dist(p1,p2);
		//finalx = p2.x;
		//finaly = p2.y;
		//draw(p1,new Point(finalx,finaly));

	}
	//console.log(x1,y1);
	
	stx=finalx;
	sty=finaly;
	//move(stx,sty);

	
	return;
}