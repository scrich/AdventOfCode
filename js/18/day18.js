puzzles = input.split(/\n/);

for (let puzzle of puzzles){
    console.log(puzzle);

    let result = calculate(puzzle);
}

function calculate(puzzle) {
    let result = 0;
    // work out 

    // term 1
    let term1;
    let operator;
    let term2;
    
    // operator
    // term 2

    let match = puzzle.match(/\(.+\)/g);
    console.log(match);

/*
    find a single bracket and stuff in
    \([\d\s\+*]+?\)

    replace with the calculation

    */

    return result;
}