import React from 'react'

function plotSine(ctx, xOffset, yOffset) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(172, 172, 172)";
    
    var x = -2;
    var y = 0;
    var amplitude = 10;
    var frequency = 100;
    ctx.moveTo(x, 50);
    while (x < width) {
        y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();

    ctx.restore();
}
function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas === null) {
        return
    }
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, window.outerWidth, window.outerWidth);
    context.save();            
    
    plotSine(context, step, 50);
    context.restore();
    
    step += .5;
    window.requestAnimationFrame(() => draw(id));
}

var step = -10;

function Sine() {
    const id = Number.parseInt(Math.random() * 1000)
    window.requestAnimationFrame(() => draw(id));
    return(
        <canvas id={id} width={window.outerWidth} height="25" />
    )
}

export default Sine