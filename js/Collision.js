svg = document.getElementById('svg8');
let queen = svg.getElementById('red');
let qx = queen.getAttribute("cx");
let qy = queen.getAttribute("cy");



function collision(x1,y1,s) {
  
  for (let i = 0; i < 9; i++) {
    //console.log(bx[i] +" "+ by[i]);
    if (dist(new Point(x1,y1),new Point(bx[i],by[i])) <= 25) {
      //console.log("hello");
      if (bx[i] >= x1 && by[i] < y1) {
        init(1.3 * bx[i], 0.5 * by[i], black[i]);
      } else if(bx[i] < x1 && by[i] < y1){
        //console.log(bx[i] + " " + x1);
        init(0.5 * bx[i], 0.5 * by[i], black[i]);
      }
      else if(bx[i] >= x1 && by[i] >= y1){
       // console.log(bx[i] + " " + x1);
        init(1.3 * bx[i], 1.3 * by[i], black[i]);
      }
      else if(bx[i] < x1 && by[i] >= y1){
        //console.log(bx[i] + " " + x1);
        init(0.5 * bx[i], 1.3 * by[i], black[i]);
      }
    }
    if (dist(new Point(x1,y1),new Point(wx[i],wy[i])) <= 25) {

      if (wx[i] >= x1 && wy[i] <= y1) {
        init(1.3 * wx[i], 0.5 * wy[i], white[i]);
      } else if (wx[i] >= x1 && wy[i] <= y1){
        init(0.5 * wx[i], 0.5 * wy[i], white[i]);
      }
      else if (wx[i] >= x1 && wy[i] <= y1){
        init(1.3 * wx[i], 1.3 * wy[i], white[i]);
      }
      else{
        init(0.5 * wx[i], 1.3 * wy[i], white[i]);
      }
    }
    if (dist(new Point(x1,y1),new Point(qx,qy)) <= 25){
     // console.log(queen);
      if (qx >= x1 && qy <= y1) {
        init(1.3 * qx, 1.3 * qy,"red");
      } else {
        init(0.5 * qx, 1.3 * qy,"red");
      }
    }
    
      //console.log("nothing");
  }
}

function mirror() {
  let elip = svg.getElementById("striker");
  qx = queen.getAttribute("cx");
  qy = queen.getAttribute("cy");
  for (let i = 0; i < 9; i++) {
    bx[i] = 422 - bx[i];
    by[i] = 387 - by[i];
    wx[i] = 422 - wx[i];
    wy[i] = 387 - wy[i];
    qx    = 422 - qx;
    qy    = 387 - qy;
  }
  init(250,310,"striker");
  for (let i = 0; i < 9; i++) {
    init(bx[i], by[i], black[i]);
    init(wx[i], wy[i], white[i]);
    init(qx,qy,"red");
  }
}

function collide(x,y,s) {
  collision(x,y,s);
}

let first,second;

function isTouch(x1,y1,x2,y2,s){   //s is 1 if striker's coordinates are provided
  
  first = new Point(x1,y1);
  second = new Point(x2,y2);

  d = dist(first,second);
  r1 = 10;
  r2 = 10;
  if(s==="striker")
    r1=13;  

  rad = r1 + r2;
  //console.log(d<=rad);
    return(d < rad);
}