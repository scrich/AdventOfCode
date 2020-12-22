const DEBUG = true;

let hands = input.split(/\n\n/);

DEBUG && console.log(hands);

// Player 1:↵9↵2↵6↵3↵1


let player1 = hands[0].slice(10,).split(/\n/);
let player2 = hands[1].slice(10,).split(/\n/);

let round = 0;

while (player1.length != 0 && player2.length != 0) {
    play()
}
gameover();


function play() {
    round ++;
    console.log("-- Round "+round+" --");
    renderHands();
    let p1 = parseInt(player1.shift()); // get top card
    let p2 = parseInt(player2.shift()); // as an Int !
    renderPlay(p1,p2);

    if (p1>p2) {
        // give the cards to p1
        player1.push(p1);
        player1.push(p2);
        console.log ("Player 1 wins the round!")
    } else {
        player2.push(p2);
        player2.push(p1);
        console.log ("Player 2 wins the round!")
    }
}

function renderHands() {
    console.log ("Player 1's deck: "+player1);
    console.log ("Player 2's deck: "+player2);
}

function renderPlay(p1,p2) {
    console.log ("Player 1 plays: "+p1);
    console.log ("Player 2 plays: "+p2);
}

function gameover() {
    console.log("== Post-game results ==");
    renderHands();
    // calculate score
    if (player1.length > player2.length) {
        console.log ("Player 1 wins");
        console.log ("score: " + score(player1));
    } else {
        console.log ("Player 2 wins");
        console.log ("score: " + score(player2));
    }
}

function score(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
        score += hand[i]*(hand.length-i);
    }
    return score;
}