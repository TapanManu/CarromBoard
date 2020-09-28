svg = document.getElementById('svg8');
let queen = svg.getElementById('red');
let qx = queen.getAttribute("cx");
let qy = queen.getAttribute("cy");

function collision(x1, y1) {
  
  for (let i = 0; i < 9; i++) {
    if (dist(new Point(x1, y1), new Point(bx[i], by[i])) <= 25) {
      if (bx[i] >= x1 && by[i] <= y1) {
        init(1.3 * bx[i], 1.3 * by[i], black[i]);
      } else {
        init(0.5 * bx[i], 1.3 * by[i], black[i]);
      }
    }
    if (dist(new Point(x1, y1),new Point(wx[i], wy[i])) <= 25) {
      if (wx[i] >= x1 && wy[i] <= y1) {
        init(1.3 * wx[i], 1.3 * wy[i], white[i]);
      } else {
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
    else
      console.log("nothing");
  }
}

function mirror() {
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

  for (let i = 0; i < 9; i++) {
    init(bx[i], by[i], black[i]);
    init(wx[i], wy[i], white[i]);
    init(qx,qy,"red");
  }
}

function collide() {
  collision(213, 196);
}