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
var vy = -10; 

setInterval(function() {
    c.fillStyle = "black";  
    c.fillRect(0,0,canvas.width,canvas.height); 
    
    // vx *= 0.9;  // Delete these lines
    // vy *= 0.9;  
    
    posX += vx;
    posY += vy;
    
    vy += 1; // 1. redefine as variable 'gravity'
    
    if (posY > 750) {
        vy *= -1; // 2. change to decimal 
        vx *= -1; // 3. add for bounce back and forth
        posY = 750;
    }
    
    c.fillStyle = "white";
    c.fillRect(posX, posY, 10, 10);
    
}, 30);
