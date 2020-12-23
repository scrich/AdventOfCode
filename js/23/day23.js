const DEBUG = true;

// let cups = "389125467";
let cups = "487912365";
cups = cups.split("");
cups = cups.map(function (cup) { return parseInt(cup) });
// now we have an array

let current = 0; // numbered from the start of the string.

// let's always replace the start of the array, 
// then spin in, never go round the edge

for (let i = 1; i < 101; i++) {
    DEBUG && console.log("-- Move " + i + " --");
    current = move(current);
}
DEBUG && console.log("Finished: cups " + cups);
while (cups[0] != 1) {
    arrShiftLeft(cups);
}
console.log("Final position: " + cups.join(""));

function move(current) {
    // shift to put current at the start
    // take stock of which cup is current
    let currentlabel = (cups[current])
    DEBUG && console.log("currentlabel " + currentlabel);
    // code
    
    arrShiftLeft(cups, current);
    current = cups.indexOf(currentlabel);

    DEBUG && console.log("currentlabel " + currentlabel);
    DEBUG && console.log("cups " + cups);
    DEBUG && console.log("current " + current);
    
    /*
    The crab picks up the three cups 
    that are immediately clockwise of the current cup. 
    They are removed from the circle; 
    cup spacing is adjusted as necessary to maintain the circle.
    */

    let removedcups = cups.splice(current + 1, 3);
    DEBUG && console.log("removedcups " + removedcups);
    DEBUG && console.log("cups " + cups);

    /**
     * The crab selects a destination cup: 
     * the cup with a label equal to the current cup's label minus one. 
     * If this would select one of the cups that was just picked up, 
     * the crab will keep subtracting one until it finds a cup 
     * that wasn't just picked up. 
     * If at any point in this process 
     * the value goes below the lowest value on any cup's label, 
     * it wraps around to the highest value on any cup's label instead.
     */

    let lowcup = Math.min(...cups);
    DEBUG && console.log("lowcup " + lowcup);

    let highcup = Math.max(...cups);
    DEBUG && console.log("highcup " + highcup);

    let destcup;

    // find the dest cup
    if (currentlabel == lowcup) {
        destcup = highcup;
    } else {
        for (let i = currentlabel - 1; i > 0; i--) {
            DEBUG && console.log("seeking cup with i=" + i);
            if (cups.includes(i)) {
                destcup = i;
                break;
            }
        }
    }

    DEBUG && console.log("destcup " + destcup);

    // now find the POSITION of the destcup

    destpos = cups.indexOf(destcup);
    DEBUG && console.log("destpos " + destpos);


    /**
     * The crab places the cups it just picked up 
     * so that they are immediately clockwise of the destination cup. 
     * They keep the same order as when they were picked up.
     */

    // 

    cups.splice(destpos + 1, 0, removedcups[0], removedcups[1], removedcups[2]);
    DEBUG && console.log("cups " + cups);

    /**
     * The crab selects a new current cup: 
     * the cup which is immediately clockwise of the current cup.
     */

    let currentpos = cups.indexOf(currentlabel);
    DEBUG && console.log("currentpos " + currentpos);
    if (currentpos == cups.length) {
        current = 0;
    } else {
        current = currentpos+1;
    }
    DEBUG && console.log("new current is "+current+" value "+cups[current]);
    return current;
}


// ###### FUNCTIONS ##### //

function getNext(arr, value) {
    let currentpos = arr.indexOf(value);
    let nextcurrent;
    if (currentpos == arr.length) {
        nextcurrent = 0;
    } else {
        nextcurrent = currentpos+1;
    }
    return nextcurrent;    
}

function arrShiftLeft(arr, times = 1) {
    // 12345 input array
    // 23451 output
    for (let i = 0; i < times; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

function arrShiftRight(arr, times = 1) {
    // 12345 input
    // 51234 output
    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
function strShiftLeft(str, times = 1) {
    // 12345 input
    // 23451 output
    for (let i = 0; i < times; i++) {
        str = str.slice(1,) + str.slice(0, 1);
    }
    return str;
}

function strShiftRight(str, times = 1) {
    // 12345 input
    // 51234 output
    for (let i = 0; i < times; i++) {
        str = str.slice(-1,) + str.slice(0, -1);
    }
    return str;
}