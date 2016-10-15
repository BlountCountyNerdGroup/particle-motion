var canvas = document.createElement("canvas")
var c = canvas.getContext("2d");
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

c.fillStyle = "black";
c.fillRect(0,0,canvas.width,canvas.height);

var posX = canvas.width / 2;
var posY = canvas.height / 2;

setInterval(function() {
    posX += -1;
    posY += 1;
    c.fillStyle = "white";
    c.fillRect(posX, posY, 10, 10);
    
}, 30);
