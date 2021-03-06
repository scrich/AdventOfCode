const DEBUG = false;

let hands = input.split(/\n\n/);

DEBUG && console.log(hands);

// Player 1:↵9↵2↵6↵3↵1


let player1cards = hands[0].slice(10,).split(/\n/);
let player2cards = hands[1].slice(10,).split(/\n/);

var gamecount = 0;


let winner = game(player1cards, player2cards, gamecount);
console.log("Game winner is " + winner);

function game(player1, player2, gamecount) {

    gamecount++;

    let round = 0;
    let gamehistory = [];
    let winner;

    console.log("=== Game " + gamecount + " ===")

    while (player1.length != 0 && player2.length != 0) {

        // check for previous hand

        let handcheck = player1.join() +","+ player2.join();
        if (gamehistory.includes(handcheck)) {
            // player 1 wins instantly
            round++;
            console.log("-- Round " + round + " --");
            console.log("infinite game break")
            winner = "Player1";
            return winner;
        } else {
            gamehistory.push(handcheck);
        }

        DEBUG && console.log(gamehistory);


        play(player1, player2, gamecount);
    }
    winner = gameover(player1, player2);
    return winner;


    function play(player1, player2, gamecount) {
        round++;

        console.log("-- Round " + round + "(Game "+ gamecount +") --" );
    // -->    renderHands(player1, player2);
        let p1 = parseInt(player1.shift()); // get top card
        let p2 = parseInt(player2.shift()); // as an Int !
     // -->   renderPlay(p1, p2);

        /* If both players have at least 
        as many cards remaining in their deck 
        as the value of the card they just drew, 
        the winner of the round is determined 
        by playing a new game of Recursive Combat (see below).
        */

        // check for subgame
        // console.log("check subgame");
        // console.log (p1);
        // console.log(player1);
        // console.log(p2);
        // console.log(player2);

        if ((player1.length >= p1) && (player2.length >= p2)) {
            console.log("subgame!");
        // -->    console.log("p1: "+ p1 + ", p2: " + p2);
            let roundwinner = game(player1.slice(0, p1), player2.slice(0, p2), gamecount);
            if (roundwinner == "player1") {
                player1.push(p1);
                player1.push(p2);
                console.log("Player 1 wins round " + round + " of game " + gamecount);
            } else {
                player2.push(p2);
                player2.push(p1);
                console.log("Player 2 wins round " + round + " of game " + gamecount);
            }
        } else {

            if (p1 > p2) {
                // give the cards to p1
                player1.push(p1);
                player1.push(p2);
                console.log("Player 1 wins round " + round + " of game " + gamecount);
            } else {
                player2.push(p2);
                player2.push(p1);
                console.log("Player 2 wins round " + round + " of game " + gamecount);
            }
        }
    }

}

function renderHands(player1, player2) {
    console.log("Player 1's deck: " + player1);
    console.log("Player 2's deck: " + player2);
}

function renderPlay(p1, p2) {
    console.log("Player 1 plays: " + p1);
    console.log("Player 2 plays: " + p2);
}

function gameover(player1, player2) {
    let winner;
    console.log("== Post-game results ==");
    renderHands(player1, player2);
    // calculate score
    if (player1.length > player2.length) {
        console.log("Player 1 wins");
        console.log("score: " + score(player1));
        winner = "Player1";
    } else {
        console.log("Player 2 wins");
        console.log("score: " + score(player2));
        winner = "Player2"
    }
    return winner;
}

function score(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
        score += hand[i] * (hand.length - i);
    }
    return score;
}