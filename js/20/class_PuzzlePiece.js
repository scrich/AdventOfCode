class PuzzlePiece {
    constructor(ID, cells) {
        this.ID = ID.slice(-4,);
        this.cells = fillCells(cells);
        this.top = this.cells[0].join("");
        this.bottom = this.cells[9].join("");
        this.left = joinCol(this.cells, 0);
        this.right = joinCol(this.cells, 9);
        this.edges = listEdges(this.top, this.bottom, this.left, this.right)
        this.matches = 0;
        // edges - corner pieces have only two matching corners
        // let's treat the edges as binary numbers
        // or is it easier (just as easy?) to compare as strings?
    }

    render(x, y, size) {
        stroke(0);
        fill(color("blue"));
        rect(x, y, size * 10);
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[0].length; j++) {
                stroke(0);
                fill(this.cells[i][j] * 255);
                rect(x + i * size, y + j * size, size);
            }
        }
    }

    compareEdges(piece) {
        // compare edges with another puzzle
        let matches = 0;
        for (let edge of this.edges) {
            // console.log (edge);
            // console.log(reverseString(edge));
            console.log ("compare " + edge + " with " + piece.edges);
            if (piece.edges.includes(edge)) {
                matches ++;
                console.log("match");
            }
            console.log ("compare " + reverseString(edge) + " with " + piece.edges);
            if (piece.edges.includes(reverseString(edge))) {
                matches ++;
                console.log("match");
            }
        }
        this.matches += matches;
    }
}

function listEdges(top, bottom, left, right) {
    let arr = [
        smallerBinStr(top),
        smallerBinStr(right),
        smallerBinStr(bottom),
        smallerBinStr(left)
    ];
    return arr;
}

function smallerBinStr(str) {
    return parseInt(str, 2) > parseInt(reverseString(str), 2) ? str : reverseString(str);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

function joinCol(cells, col) {
    let str = "";
    for (let i = 0; i < cells.length; i++) {
        str += cells[i][col];
    }
    return str;
}

function fillCells(cells) {
    DEBUG && console.log("fillCells input:");
    DEBUG && console.log(cells);
    let arr = make2DArray(10, 10);
    let rows = cells.split(/\n/);
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].split("");
        for (let j = 0; j < cols.length; j++) {
            arr[i][j] = cols[j] == "#" ? 1 : 0;
        }
    }
    // DEBUG && console.log("rows");
    // DEBUG && console.log(rows);
    // for (let row of rows) {
    //     let cols = row.split("");
    //     DEBUG && console.log("cols");
    //     DEBUG && console.log(cols);
    // }
    // let arr = new Array(rows.length);
    // DEBUG && console.log("arr");
    // DEBUG && console.log(arr);

    // for (let i = 0; i < )

    return arr;
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}