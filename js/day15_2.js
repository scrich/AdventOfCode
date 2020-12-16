console.time("guess");

// set up an array of guesses
let start = [15,5,1,4,7,0];
//let start = [3,2,1];
let guesses = start;
let prev = start[start.length-1];
let max = 30000000;

// make an object of previous numbers
let previous = {};

for (let i = 0; i < start.length; i++) {
    // assuming each number is in start only once
    // record the position of the numbers we've seen
    // array, most recent and previous

    previous[start[i]] = [i];
}

for (let turn = start.length + 1; turn < max+1; turn++) {

    // 30000000
    // 30000001;
    
    if (turn%10000 == 0) {console.log(turn);}

    // console.log("turn: " + turn);
    // console.log(previous);
    // we won't actually touch this array, just put numbers in it
    //prev = guesses[turn - 2];
    let history = previous[prev];

    // have we seen prev before?
    // yes, always
    // how many times?

    if (history.length > 1) {
        // seen the number before
        let diff = history[1] - history[0];
        //guesses.push(diff);
        prev = diff;
        // update record for diff
        updatePrevious(diff, turn - 1);
    } else {
        // never seen it before that last go
        prev=0;
        //guesses.push(0);
        updatePrevious(0, turn - 1);
    }


}

document.write("<p>number "+max+" is </p>");
//document.write(guesses[2019]);
document.write(prev);


// document.write("<p>the 30000000th number is </p>");
// document.write(guesses[30000000 - 1]);

console.timeEnd("guess");

function updatePrevious(value, pos) {
    let history = previous[value];
    if (history) {
        if (history.length > 1) {
            history.shift();
        }
        history.push(pos);
        previous[value] = history;

    } else {
        // there is no record in previous
        previous[value] = [pos];
    }
}
