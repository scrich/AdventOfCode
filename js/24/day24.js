const DEBUG = true;
let scale = 10;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// use a hexagonal grid, centred at zero

let floormap = new Map;

function setup() {
    createCanvas(400,400);

    floormap.set([1,0], 1);


}

function draw() {
    background(127);

    translate(width/2,height/2);

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 20; j++) {
            drawHex(i,j);
            
        }
    }

    
    noLoop();
}

function drawHex(q,r) {
    // q - column
    // r - row
    
    /**
     * draw the centre
     * could just have circles in a hexagonal grid
     * - don't need to draw as hexagons
     */

     let x = (q + (r%2)) * scale;
     let y = r*2 * scale;
     
     console.log(q, q%2);

     fill(255);
     stroke(255);
     circle(x,y,10);
}