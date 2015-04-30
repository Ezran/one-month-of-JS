$(document).ready(function() {
    console.log("Loaded.");
    var canvas = document.getElementById("myCanvas"), context = canvas.getContext("2d");
    var radius = 40, x = canvas.width/2, y = canvas.height/4, dx = 4, dy = 0;

    var drawCircle = function() {
        context.beginPath();
        context.arc(x,y,radius,0,2*Math.PI,false);
        context.fillStyle = 'green';
        context.fill();
    };

    var update = function() {
        context.clearRect(0,0,canvas.width,canvas.height);

        var newdx = dx, newdy = dy + 0.2, newx = x + newdx, newy = y + newdy;

        if (newx < radius){
            newx = radius;
            newdx = newdx * -1;
        }
        else if (newx + radius > canvas.width ){
            newx = canvas.width-radius;
            newdx = newdx * -1;
        }
        if (newy < radius){
            newy = radius;
            newdy = newdy * -1;
        }
        else if (newy + radius > canvas.height ){
            newy = canvas.height-radius;
            newdy = newdy * -1;
        }

        dx = newdx;
        dy = newdy;
        x = newx;
        y = newy;

        drawCircle();

        setTimeout(update, 17);
    };

    drawCircle();
    update();
});