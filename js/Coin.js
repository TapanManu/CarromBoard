let j=0;
let svg = document.getElementById('svg8');
let striker = svg.getElementById('striker');
let clicked=false;
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
        		striker.setAttribute('cx',100);
        		striker.setAttribute('cy',200);
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
