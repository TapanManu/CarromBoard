var black = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
var white = ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9"];

var bx = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var by = [];

var wx = [];
var wy = [];

const limitXLower = 25;
const limitXHigher = 370;
const limitYLower = 25;
const limitYHigher = 370;

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) - (y2 - y1) * (y2 - y1));
}

function collision(x1, y1) {
  for (let i = 0; i < 9; i++) {
    if (distance(x1, y1, bx[i], by[i]) <= 25) {
      if (bx[i] >= x1 && by[i] <= y1) {
        move(1.3 * bx[i], 1.3 * by[i], black[i]);
      } else {
        move(0.5 * bx[i], 1.3 * by[i], black[i]);
      }
    }
    if (distance(x1, y1, wx[i], wy[i]) <= 25) {
      if (wx[i] >= x1 && wy[i] <= y1) {
        move(1.3 * wx[i], 1.3 * wy[i], white[i]);
      } else {
        move(0.5 * wx[i], 1.3 * wy[i], white[i]);
      }
    }
  }
}

function mirror() {
  for (let i = 0; i < 9; i++) {
    bx[i] = 422 - bx[i];
    by[i] = 387 - by[i];
    wx[i] = 422 - wx[i];
    wy[i] = 387 - wy[i];
  }
  for (let i = 0; i < 9; i++) {
    move(bx[i], by[i], black[i]);
    move(wx[i], wy[i], white[i]);
  }
}

function collide() {
  collision(213, 196);
}

function initialStrike() {
  for (let i = 0; i < 9; i++) {
    bx[i] =
      Math.floor(Math.random() * (limitXHigher - limitXLower)) + limitXLower;
    by[i] =
      Math.floor(Math.random() * (limitYHigher - limitYLower)) + limitYLower;
    wx[i] =
      Math.floor(Math.random() * (limitXHigher - limitXLower)) + limitXLower;
    wy[i] =
      Math.floor(Math.random() * (limitYHigher - limitYLower)) + limitYLower;
  }
  for (let i = 0; i < 9; i++) {
    move(bx[i], by[i], black[i]);
    move(wx[i], wy[i], white[i]);
  }
}

var rbx = [213, 194, 194, 194, 232, 232, 232, 174, 252];
var rby = [174, 160, 205, 230, 160, 205, 230, 196, 196];

var rwx = [213, 213, 213, 194, 232, 175, 178, 250, 250];
var rwy = [218, 240, 152, 183, 183, 170, 219, 172, 219];

var j = 0,
  k = 100,
  w = 300;
function move(x, y, cn) {
  var svg = document.getElementById("svg8");
  console.log(svg);
  var blackmove = function () {
    var elip = svg.getElementById(cn);
    elip.setAttribute("cx", x);
    elip.setAttribute("cy", y);
  };
  setTimeout(blackmove, 10);
}

function drawLine() {
  flag = true;
  var svg = document.getElementById("svg8");
  console.log(svg);
  var sr = svg.getElementById("striker");
  ax = sr.getAttribute("cx");
  ay = sr.getAttribute("cy");
  var drawing = function (e) {
    bx = e.clientX;
    by = e.clientY;
    var line = svg.getElementById("ln");
    line.setAttribute("x1", ax);
    line.setAttribute("y1", ay);
    line.setAttribute("x2", bx);
    line.setAttribute("y2", by);
    console.log(
      bx,
      by,
      e.clientX,
      e.clientY,
      line.getAttribute("x2"),
      line.getAttribute("y2")
    );
  };
  document.onmouseup = () => {
    document.getElementById("svg8").removeEventListener("mousemove", drawing);
    var line = svg.getElementById("ln");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 0);
    move(bx, by, "striker");
  };
  document.getElementById("svg8").addEventListener("mousemove", drawing);
}

function reset() {
  for (let i = 0; i < 9; i++) {
    move(rbx[i], rby[i], black[i]);
    move(rwx[i], rwy[i], white[i]);
  }
}
function test() {
  for (let i = 0; i < 9; i++) {
    move(bx[i], by[i], black[i]);
    move(bx[i], wy[i], white[i]);
  }
}
