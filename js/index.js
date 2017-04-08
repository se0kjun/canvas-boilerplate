'use strict';

var canvas, canvasCtx;

function init() {
    // start
    canvas = document.getElementById("canvas_context");
    canvasCtx = canvas.getContext('2d');
    
    document.getElementById("canvas_context").addEventListener("click", function(e) {
        // click event
        // xpos : e.pageX - (document.getElementById("canvas_context").offsetLeft - window.pageXOffset)
        // ypos : e.pageY - (document.getElementById("canvas_context").offsetTop - window.pageYOffset)
    });
    
    animate();
}

function render() {
    // tick
}
    
function animate() {
    requestAnimFrame(animate);
    render();
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback, element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

document.addEventListener("DOMContentLoaded", init);
