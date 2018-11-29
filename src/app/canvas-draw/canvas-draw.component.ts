import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.component.html',
  styleUrls: ['./canvas-draw.component.scss']
})
export class CanvasDrawComponent implements OnInit {
  @ViewChild('myCanvas') canvas: any;
 
  constructor(private renderer:  Renderer, public platform: Platform) { }

  ngOnInit() {
    var canvasElement = this.canvas.nativeElement;
   this.renderer.setElementAttribute(canvasElement, 'width', this.platform.width() + '');
   this.renderer.setElementAttribute(canvasElement, 'height', this.platform.height() + '');
   console.log(canvasElement.width);
   console.log(canvasElement.height);
   var context = canvasElement.getContext('2d');
   var x = canvasElement.width / 2;
   var y = canvasElement.height / 2;
    context.fillStyle = 'white';
  context.fillRect(0, 0 , canvasElement.width, canvasElement.height);
  var a=0,b=0,c=0;
  function handleMotionEvent(evt){
         a = evt.accelerationIncludingGravity.x;
         b = evt.accelerationIncludingGravity.y;
         c = evt.accelerationIncludingGravity.z;
         // window.requestAnimationFrame(draw); animation working better without requestAnimationFrame.
         draw();
    }
    function draw()
{
   drawPattern(x,y,a*5,b*5);
  
}
function drawPattern(x,y,a,b){
        	        	
  context.clearRect(0,0,canvasElement.width,canvasElement.height);
  drawCenterS(x,y,a,b);
  drawBottomCurvyLines(x,y,a,b);
  drawUpperFirstTwoCurves(x,y,a,b);
  drawRightSideCurvyLines(x,y,a,b);
  drawLeftSideCurvyLines(x,y,a,b);
  drawMiddleSideCurvyLines(x,y,a,b);
}

function getFillStyle(count) {

    if (count % 2 == 0) {
        return "white";
    } else {
        return "black";
    }
}
function drawCenterS(x,y,a,b)
		{	
			var count=0;
			for(var i=0,k=0;i<51 && k<51;k+=10,i+=10){
          context.beginPath(); 
          context.moveTo(x-150-i,y+20+2.5*i);
          context.bezierCurveTo(x-100+4*i+2*a,y-80+(i)+2*b,x+60-i+2*a,y-(168-2*i)+2*b,x+150,y-(208-2*i));
        // right loop
           context.bezierCurveTo(x+480-5.6*i+2*a,y-(300-4*i)+2*b,x+520-5*i+2*a,y-(150)+i+3*b,x+110-i/2, y+(150-2.5*i)  );
	   			 //left loop
            context.moveTo(x-150-i,y+20+2.5*i);
           context.bezierCurveTo(x-(180+k*9)+2*a,y+(60+6*k)+2*b,x-(270+6*k)+2*a, y+10+2*b,x-110,y-(40+2*k));
           context.strokeStyle=getFillStyle(count);
	   		 	 count++;
	   		 	 context.lineWidth=25;
	   		 	 context.stroke();

	   		 	}
        }
        function drawBottomCurvyLines(x,y,a,b)
        {
          //bottom curvy lines
          var count=1;
          for(var i=0;i<171;i+=10){
            context.beginPath();
            context.moveTo(x+80+i/2,y+20+i);
            context.bezierCurveTo(x-100+i+3*a,y+120+i+3*b,x+10+i-3*a,y+180+4*i-3*b,x-800+i,y+400+2*i);
            context.strokeStyle=getFillStyle(count);
            count++;
           context.lineWidth=40;
           context.stroke();
    
          }
            }

            function drawUpperFirstTwoCurves(x,y,a,b) {

              var count=1;
              for(var i=0;i<11;i+=10)
              {
                    context.beginPath(); 
                    context.moveTo(x-100-i,y-(100+2*i));
                 context.bezierCurveTo(x+500+4*i+3*a,y-(470+4*i)+3*b,x+700+4*i+3*a,y-(250)+3*b,x+140+i, y+150 +2*i );
                    context.strokeStyle=getFillStyle(count);
                    count++;
                  context.lineWidth=30;
                  context.stroke();
              }
              
            }
            
            function drawRightSideCurvyLines(x,y,a,b){
              var count=1;
              for(var i=0;i<411;i+=20)
              {
                context.beginPath(); 
                context.moveTo(x+145,y+180+i/4);
                context.quadraticCurveTo(x+350+i+3*a,y+100+i+3*b,x+700+i,y-320+6*i);
                context.strokeStyle=getFillStyle(count);
                count++;
                context.lineWidth=30;
                context.stroke();
        
              }
              
            }
            function drawLeftSideCurvyLines(x,y,a,b){
              //left curvy lines
              var count=1;
              for(var i=0;i<261;i+=20){
                context.beginPath(); 		
                context.moveTo(x-130,y-180-i/4);
                context.quadraticCurveTo(x-600-i+3*a,y-20-i+3*b,-60-i,canvasElement.height-100-10*i);
                context.strokeStyle=getFillStyle(count);
                count++;	
                context.lineWidth=30;
                context.stroke();
              }
            }
        
            function drawMiddleSideCurvyLines(x,y,a,b){
              //middle curvy lines
        
              var count=1;
              for(var i=0;i<71;i+=10){
                context.beginPath(); 		
                context.moveTo(x-120-i,y-135-2*i);
                context.quadraticCurveTo(x-10-i+3*a,y-200-i+3*b,x+250+i,y-320-6*i);
                context.strokeStyle=getFillStyle(count);
                  count++;
                context.lineWidth=20;
                context.stroke();
              }
            }
        
        
                
               window.addEventListener("devicemotion", handleMotionEvent, true);
            
    

  }

}


