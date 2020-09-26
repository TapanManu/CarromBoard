let hx = [50,369,50,369];
let hy = [60,60,330,330];

function checkHoles(p1){
	if(p1.x<=hx[0] && p1.y<=hy[0]){
		return true;
	}
	if(p1.x>=hx[1] && p1.y<=hy[1]){
		return true;
	}
	if(p1.x<=hx[2] && p1.y>=hy[2]){
		return true;
	}
	if(p1.x>=hx[3] && p1.y>=hy[3]){
		return true;
	}
	return false;
}

