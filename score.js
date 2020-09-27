var black = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
var white = ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9"];

var hx = [36, 389, 36, 389];
var hy = [40, 40, 360, 360];

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) - (y2 - y1) * (y2 - y1));
}

function isCollide(x, y) {
  for (let i = 0; i < 9; i++) {
    if (distance(x, y, bx[i], by[i]) == 25) {
      move(black[i], 1.5 * bx[i], 1.5 * by[i]);
    }
    if (distance(x, y, wx[i], wy[i]) == 25) {
      move(white[i], 1.5 * wx[i], 1.5 * wy[i]);
    }
  }
}

function trial() {
  for (let i = 0; i < 9; i++) {
    ishole(white[i], 389, 40);
  }
}

function ishole(coin, x, y) {
  var svg = document.getElementById("svg8");
  if (coin == "striker") {
    for (let i = 0; i < 4; i++) {
      if (
        (x <= hx[0] && y <= hy[0]) ||
        (x >= hx[1] && y <= hy[1]) ||
        (x <= hx[2] && y >= hy[2]) ||
        (x >= hx[3] && y <= hy[3])
      ) {
        console.log("-1");
        return;
      }
    }
  } else {
    for (let i = 0; i < 9; i++) {
      if (coin == black[i]) {
        for (let i = 0; i < 4; i++) {
          if (
            (x <= hx[0] && y <= hy[0]) ||
            (x >= hx[1] && y <= hy[1]) ||
            (x <= hx[2] && y >= hy[2]) ||
            (x >= hx[3] && y <= hy[3])
          ) {
            console.log("1");
            var elip = svg.getElementById(coin);
            elip.setAttribute("cx", -1);
            elip.setAttribute("cy", -1);
            return;
          }
        }
      }
      if (coin == white[i]) {
        for (let i = 0; i < 4; i++) {
          if (
            (x <= hx[0] && y <= hy[0]) ||
            (x >= hx[1] && y <= hy[1]) ||
            (x <= hx[2] && y >= hy[2]) ||
            (x >= hx[3] && y <= hy[3])
          ) {
            console.log("2");
            var elip = svg.getElementById(coin);
            elip.setAttribute("cx", -1);
            elip.setAttribute("cy", -1);
            return;
          }
        }
      }
    }
  }
}
