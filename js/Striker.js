let t=0,p,tflag=0;
let svg = document.getElementById('svg8');
let striker = svg.getElementById('striker');
let stx=250,sty=310;
let clicked=false;
let cx_left_wall=22;
let cx_right_wall = 405;
let top_wall = 25;
let bottom_wall = 370;
let p1 = new Point(200,310);
/*let p2 = new Point(cx_left_wall,190);
let p3 = new Point(cx_right_wall,188);
let p4 = new Point(335,top_wall);
let p5 = new Point(600,bottom_wall);
let p6 = new Point(100,200);
let p7 = new Point(214,195);
let p8 = new Point(194,195);*/				//testing values

let queen = svg.getElementById('red');
let qx=213,qy=196;



//drawLine(p2,p3);
window.addEventListener("load", function(event) {
      
      //reset();
      striker.onmousedown = function(event){
      clicked=!clicked;
      striker.style.position = 'relative';
      
      striker.setAttribute('cx',stx);
      striker.setAttribute('cy',sty);

      t++;

      function onMouseMove(event) {        
        //console.log(event);
        var CTM = svg.getScreenCTM();
        let x = (event.clientX-CTM.e)/CTM.a;		//mouse drag issue fixed
        let y = (event.clientY-CTM.f)/CTM.d;
        sty=y;
        if(clicked){    	
        	if(x>=110 && x<=320)
      			striker.setAttribute('cx',x);      	//mouse pointer move along striker
      		stx=x;
      		p1.x = x;
        }
        else if(!clicked && t==2){
        		//call a function to re - render the page after strike
        		
        }
        else if(t>2){
        	return;
        }
  		
      }
      svg.addEventListener('mousemove', onMouseMove);
      svg.appendChild(striker);

      striker.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        striker.onmouseup = null;
      };
      
      }   
  });




let first,sec;
function collided(x1,y1,x2,y2,s){		//s is 1 if striker's coordinates are provided
	
	first = new Point(x1,y1);
	second = new Point(x2,y2);

	d = dist(first,second);
	r1 = 10;
	r2 = 10;
	if(s==1)
		r1=13;	
	rad = r1 + r2;
	console.log(rad);
		return(d <= rad);
}

//let collid = collided(bx[5],by[5],wx[4],wy[4],0);
//console.log(collid);

//move(100,100,striker);


