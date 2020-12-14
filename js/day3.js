let hill = input.split("\n");
//let trees = 0;

let x = 0;

// hill bits are 31 long

document.write("<pre>");
let outstr;

let collisions = slide(1,1)*slide(3,1)*slide(5,1)*slide(7,1)*slide(1,2);
// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

document.write("</pre>");
document.write(collisions);

function slide(xd,yd) {
    let trees = 0;
    let x = 0;
    for (let y = 0; y < hill.length; y+=yd) {

        outstr = "";

        x = x % 31;
        console.log(x, y);
        let row = hill[y].split("");
        // check for tree
        if (row[x] == "#") {
            trees++;
            row[x] = "X";
        } else {
            row[x] = "O";
        }

        document.write(hill[y]);
        document.write("  ");

        for (let i = 0; i < row.length; i++) {
            outstr = outstr + row[i];
        }
        document.write(outstr);
        document.write("  ");
        document.write(trees);
        document.write("\r");

        // increment position
        x += xd;
    }
    return trees;
}

