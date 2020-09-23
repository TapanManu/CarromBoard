let j=0,k=0;
let svg = document.getElementById('svg8');
let striker = svg.getElementById('striker');
let clicked=false;
window.addEventListener("load", function(event) {
      let elip = svg.getElementById('redPuc');
      striker.onmousedown = function(event){
      let shiftX = event.clientX - striker.getBoundingClientRect().left;
      let shiftY = event.clientY - striker.getBoundingClientRect().top;
      let l=0,t=0;
      clicked=!clicked;
      striker.style.position = 'relative';
      function onMouseMove(event) {        
        console.log(event);
        var CTM = svg.getScreenCTM();
        if(clicked)
      		striker.setAttribute('cx',(event.clientX-CTM.e)/CTM.a);      	
  
      }
      svg.addEventListener('mousemove', onMouseMove);
      svg.appendChild(striker);

      striker.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        striker.onmouseup = null;
      };
      
      }

      
    
  });
