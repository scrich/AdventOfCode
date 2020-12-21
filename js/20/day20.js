const DEBUG = false;
let puzzle = [];

function setup() {
    createCanvas(532, 532);
    for (piece of input) {
        let bits = piece.split(/:\n/);
        puzzle.push(new PuzzlePiece(bits[0], bits[1]));
    }
}

function draw() {
    background(51);
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            let index = i * 12 + j;
            puzzle[index].render(i * 44 + 4, j * 44 + 4, 4);
        }
    }

    // compare
    /*
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle.length; j++) {
            if (i != j) {
                console.log("comparing " + i + " vs " + j);
                console.log("comparing " + puzzle[i].ID + " with " + puzzle[j].ID);
                puzzle[i].compareEdges(puzzle[j]);
            }
        }
    }
    */

    // let product = 1; 

    // for (let i = 0; i < puzzle.length; i++) {
    //     console.log(
    //         "piece: " + puzzle[i].ID +
    //         " matches: " + puzzle[i].matches
    //     );
    //     let matches = puzzle[i].matches;
    //     if (matches == 2) {
    //         product *= parseInt(puzzle[i].ID);
    //     }
    // }

    // console.log ("product: " + product);


    noLoop();
}




