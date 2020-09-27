 black = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
 white = ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9"];
let resettag=0;
var bx = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var by = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var wx = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wy = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const limitXLower = 25;
const limitXHigher = 370;
const limitYLower = 25;
const limitYHigher = 370;

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

function init(x,y,cn){
   var svg = document.getElementById("svg8");
  
   var coinmove = function () {
    var elip = svg.getElementById(cn);
    let x1 = elip.setAttribute("cx",x);
    let y1 = elip.setAttribute("cy",y);
  };
  setTimeout(coinmove,100);

}
function move(x, y, cn) {
  var svg = document.getElementById("svg8");
  
  var coinmove = function () {
    var elip = svg.getElementById(cn);
    let x1 = elip.getAttribute("cx");
    let y1 = elip.getAttribute("cy");
    let i=parseInt(x1);
    let j=parseInt(y1);
   
    console.log(x);
    console.log(y);
  
       
   while(i!==x || j!==y){
      if(i>x)
        elip.setAttribute("cx", i-=1);
      else if(i<x)
        elip.setAttribute("cx", i+=1);
      else if(i==x)
        elip.setAttribute("cx", i);

     
      


      if(i<=cx_left_wall || i>=cx_right_wall){
       // console.log(true);
          rebound_from_wall(new Point(x1,y1),new Point(i,j),"striker");
          break;
      }
        
    

      if(j>y)
        elip.setAttribute("cy", j-=1);
      else if(j<y)
        elip.setAttribute("cy", j+=1);
      else if(j==y)
        elip.setAttribute("cy",j);
      if(j<=top_wall || j>=bottom_wall){
          rebound_from_wall(new Point(x1,y1),new Point(i,j),"striker");
          break;
      }
       //check for holes
     let h = 0;
      h = isHole("striker",new Point(i,j));
      if(h==1)
          break;

      //console.log(i+"  "+j);
      if(i==x && j==y)
        break;

    }
  
  };
 setTimeout(coinmove, 100);
}

function drawLine() {
  flag = true;
  var svg = document.getElementById("svg8");
  //console.log(svg);
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
   /* console.log(
      bx,
      by,
      e.clientX,
      e.clientY,
      line.getAttribute("x2"),
      line.getAttribute("y2")
    );*/
  };
  document.onmouseup = () => {
    document.getElementById("svg8").removeEventListener("mousemove", drawing);
    var line = svg.getElementById("ln");
    console.log("hello")
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 0);
    move(bx, by, "striker");
  };
  document.getElementById("svg8").addEventListener("mousemove", drawing);
}

function reset() {
  
  init(250,310,"striker");
  for (let i = 0; i < 9; i++) {
    init(rbx[i], rby[i], black[i]);
    init(rwx[i], rwy[i], white[i]);
  }
      //does not call move afterwards
}
/*function test() {
  for (let i = 0; i < 9; i++) {
    move(bx[i], by[i], black[i]);
    move(bx[i], wy[i], white[i]);
  }
}*/