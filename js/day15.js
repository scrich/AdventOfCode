// set up an array of guesses
let start = [15,5,1,4,7,0];
let guesses = start;
let prev;

for (let turn = start.length+1; turn < 2021; turn++) {
    
    //console.log("turn: "+ turn);
    // loop backwards through the array
    prev = guesses[turn-2];
    
    // count how many time we've seen prev
    let count = guesses.filter(guess => guess==prev);
    //console.log(count.length);

    if (count.length == 1) {
        guesses.push(0);
    } else {
        // we've seen the number before
        // find out when
        // most recent is turn-2
           let pos = turn - 3;
        while (guesses[pos] != prev) {
            pos --;
        }
        //console.log("pos: "+pos);
        // prev = turn-2
        guesses.push(turn-2-pos);
    }

    //console.log(guesses);
    
}

document.write("<p>the 2020th number is </p>");
document.write(guesses[2019]);
