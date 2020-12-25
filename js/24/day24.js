const DEBUG = true;
let scale = 20;
let spacing;
let current;
let next;
let flipped;
let p;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// use a hexagonal grid, centred at zero

let floormap = new Map;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    spacing = 1 / (sin(30));
    current = [0,0];
    flipped = [];

}

function draw() {
    background(127);

    translate(width / 2, height / 2);

    // for (let q = -6; q < 6; q+=2) {
    //     for (let r = -6; r < 6; r+=2) {
    //         drawHex([q, r], scale);
    //     }
    // }
    // for (let q = -5; q < 6; q+=2) {
    //     for (let r = -5; r < 6; r+=2) {
    //         drawHex([q, r], scale);
    //     }
    // }

    let routes = input.split(/\n/);
    // console.log(routes);

    for (let rawroute of routes) {
    
    let route = parseRoute(rawroute);
    // let route = ["nw","w","sw","e","e"];
    current = [0,0];
    drawHex(current,scale);
    for (step of route) {
    next = move(step, current);
    drawHex(next,scale);
    current = next;
    }
    fliptile(current, scale);
    flipped.push(current);

}
    let blacks = Array.from(floormap.values()).filter(a => a==0);
    p = createElement(p,"Black tiles: "+blacks.length);
    // document.write(blacks);
    noLoop();
}

function fliptile(pos, size) {
    let q = pos[0];
    let r = pos[1];
    let col; // black 0, white 1

    /**
     * Check if floormap already has this hexagon
     */
    let qrstr = "("+q+","+r+")";
     if (floormap.has(qrstr)) {
         // lookup the colour
        col = 1-floormap.get(qrstr); //duh!
        floormap.set(qrstr,col);
     } else {
         col = 0;
     }
     floormap.set(qrstr,col);

     fill(col*255);
     drawHex(pos, size, col);
}

function parseRoute(str) {
    // returns a route as an array
    result = str.match(/(se|sw|ne|nw|w|e){1}/g);
    return result;
}

function drawHex(pos, size, col=-1) {
    // q - column
    // r - row

    let q = pos[0];
    let r = pos[1];

    if (col == -1) {
        noFill();
    } else {
    fill(255*col);
    }
    

    let x = q *           size * sqrt(3)/2;
    let y = (2*r) * size * 3      /4;

    //console.log(q, q % 2);

    stroke(255);

    beginShape();
    for (let t = 0; t < 360; t += 60) {
        vertex(x + size * sin(t), y + size * cos(t));
    }
    endShape(CLOSE);

    text(q + ", " + r, x - size*.6, y);
}

function move(dir, current) {
    // e, se, sw, w, nw, and ne

    let q = current[0]; // col
    let r = current[1]; // row
    let nexttile;

    switch (dir) {
        case "e":
            q += 2;
            break;
        case "se":
            q += 1;
            r += 1;
            break;
        case "sw":
            q -= 1;
            r += 1;
            break;
        case "w":
            q -= 2;
            break;
        case "nw":
            q -= 1;
            r -= 1;
            break;
        case "ne":
            q += 1;
            r -= 1;
            break;
    }
    nexttile = [q,r];
    return nexttile;
}