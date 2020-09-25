let j=0;
let svg = document.getElementById('svg8');
let striker = svg.getElementById('striker');
let clicked=false;
let cx_left_wall=22;
let cx_right_wall = 405;
let top_wall = 25;
let bottom_wall = 370
let p1 = new Point(250,310);
let p2 = new Point(cx_left_wall,190);
let p3 = new Point(cx_right_wall,188);
let p4 = new Point(335,top_wall);
let p5 = new Point(250,bottom_wall);
let p6 = new Point(120,100);

//drawLine(p2,p3);
window.addEventListener("load", function(event) {
      let elip = svg.getElementById('redPuc');
      
      striker.onmousedown = function(event){
      clicked=!clicked;
      striker.style.position = 'relative';
      striker.setAttribute('cx',250);
      striker.setAttribute('cy',310);
      j++;
      function onMouseMove(event) {        
        //console.log(event);
        var CTM = svg.getScreenCTM();
        let x = (event.clientX-CTM.e)/CTM.a;		//mouse drag issue fixed
        let y = (event.clientY-CTM.f)/CTM.d;
        if(clicked){    	
        	if(x>=110 && x<=320)
      			striker.setAttribute('cx',x);      	//mouse pointer move along striker
        }
        else if(!clicked && j>=2){
        		rebound_from_wall(p1,p6);
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

