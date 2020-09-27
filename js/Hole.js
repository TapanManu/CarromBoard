var black = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
var white = ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9"];

let hx = [50,369,50,369];
let hy = [60,60,330,330];

function checkHoles(p1){					//replace this func later
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

function isHole(coin,p1) {						
  var svg = document.getElementById("svg8");
  if (coin == "striker") {
    for (let i = 0; i < 4; i++) {
      if (
        (p1.x <= hx[0] && p1.y <= hy[0]) ||
        (p1.x >= hx[1] && p1.y <= hy[1]) ||
        (p1.x <= hx[2] && p1.y >= hy[2]) ||
        (p1.x >= hx[3] && p1.y >= hy[3])
      ) {
        console.log("-1");
        return 1;
      }
    }
  } else {
    for (let i = 0; i < 9; i++) {
      if (coin == black[i]) {
        for (let i = 0; i < 4; i++) {
          if (
            (p1.x <= hx[0] && p1.y <= hy[0]) ||
            (p1.x >= hx[1] && p1.y <= hy[1]) ||
            (p1.x <= hx[2] && p1.y >= hy[2]) ||
            (p1.x >= hx[3] && p1.y <= hy[3])
          ) {
            console.log("1");
            var elip = svg.getElementById(coin);
            elip.setAttribute("cx", -1);
            elip.setAttribute("cy", -1);
            return 0;
          }
        }
      }
      if (coin == white[i]) {
        for (let i = 0; i < 4; i++) {
          if (
            (p1.x <= hx[0] && p1.y <= hy[0]) ||
            (p1.x >= hx[1] && p1.y <= hy[1]) ||
            (p1.x <= hx[2] && p1.y >= hy[2]) ||
            (p1.x >= hx[3] && p1.y <= hy[3])
          ) {
            console.log("2");
            var elip = svg.getElementById(coin);
            elip.setAttribute("cx", -1);
            elip.setAttribute("cy", -1);
            return 0;
          }
        }
      }
    }
  }
}

