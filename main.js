
import Line from './line.js';

// Layers
let BG = {};
let AIRPLANES = {};

var l = new Line(10, 10, 1, 400, 400, 1, 2);

// Interval function variable
var interval = null;

// Reloads the canvas
function reload() {
    // var consts = new Const();
    
    //
    let canvas = document.getElementById("idCanvas");
    let cntx = canvas.getContext("2d");

    // canvas.attributes("width") = consts.CENTERX
    // canvas.attributes("height") = consts.CENTERY

    interval = setInterval(loop, 500);
}

// Main loop
function loop() {
    update();
    draw();
}

// Updates the objects in scene
function update() {

    l.update();
}

// Draws the objects in scene
function draw() {

    l.draw().forEach(pos => {
        cntx.fillRect(pos.x, pos.y, 1, 1);
    });
    
}

// Event listener for when window have been loaded
window.addEventListener('load', reload);

// Restarts the main loop
function restart() {
    clearInterval(interval);
    reload();
}