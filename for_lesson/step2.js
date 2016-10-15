var canvas = document.createElement("canvas")
var c = canvas.getContext("2d");
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

c.fillStyle = "black";
c.fillRect(0,0,canvas.width,canvas.height);

var posX = canvas.width / 2;
var posY = canvas.height / 2;
var vx = 5; 
var vy = 5; 

setInterval(function() {
    c.fillStyle = "black";                      // 1. These two lines for erasing the square every animation
    c.fillRect(0,0,canvas.width,canvas.height); 
    
    vx *= 0.9; // 1. these 2 lines to add "friction" 
    vy *= 0.9;  
    
    posX += vx;
    posY += vy;
    c.fillStyle = "white";
    c.fillRect(posX, posY, 10, 10);
    
}, 30);
