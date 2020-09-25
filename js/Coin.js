let j=0;
let svg = document.getElementById('svg8');
let striker = svg.getElementById('striker');
let clicked=false;
let cx_left_wall=22;
let cx_right_wall = 405;
let top_wall = 25;
let p1 = new Point(250,310);
let p2 = new Point(cx_left_wall,190);

drawLine(p1,p2);
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
        let x = (event.clientX-CTM.e)/CTM.a;
        let y = (event.clientY-CTM.f)/CTM.d;
        if(clicked){    	
        	if(x>=110 && x<=320)
      			striker.setAttribute('cx',x);      	//mouse pointer move along striker
        }
        else if(!clicked && j>=2){
        		rebound_from_wall(p2);
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

