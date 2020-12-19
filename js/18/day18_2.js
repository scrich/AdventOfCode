puzzles = input.split(/\n/);
let total = 0;

for (let puzzle of puzzles) {
    console.log("Calculate PUZZLE " + puzzle);

    let answer = calculate(puzzle);
    console.log("PUZZLE ########## " + puzzle);
    console.log("Result: " + answer);
    total += answer;
}

document.write("<h2>Total homework</h2>");
document.write(total);

function calculate(puzzle) {

    console.log("called calculate with "+ puzzle);
    // work out 

    let match;
    let result;
    // 
    match = puzzle.match(/^\d+$/);
    if (match) {
        // just a single number
        // console.log("just a single number");
        // console.log(puzzle);
        result = parseInt(match[0]);
        // console.log("Returning " + result);
        return result;
    }

    match = puzzle.match(/^\d+ [\+] \d+$/);
    if (match) {
        // addition
        // console.log("can evaluate fully");
        result = eval(match[0]);
        // console.log("Returning " + result);
        return result;
    } else {

        match = puzzle.match(/^\d+ [\*] \d+$/);
        if (match) {
            // multiplication
            // console.log("can evaluate fully");
            result = eval(match[0]);
            // console.log("Returning " + result);
            return result;
        }
    }

    // let match = puzzle.match(/\(.+\)/g);

    match = puzzle.match(/\([\d\s\+*]+?\)/);
    if (match) {
        // we have some brackets
        // console.log(match);
        // console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
        let brackstart = match.index;
        let brackend = match.index + match[0].length;
        let foo = puzzle.slice(0, brackstart) + match[0] + puzzle.slice(brackend,);
        // console.log("foo: " + foo);
        // console.log("Process " + match[0].slice(1, -1));
        result = calculate(puzzle.slice(0, brackstart) + calculate(match[0].slice(1, -1)) + puzzle.slice(brackend,));


    } else {
        // console.log("no brackets");
        // process the first two terms

        match = puzzle.match(/\d+ [\+] \d+/);
        if (match) {
            console.log(match);
            // console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
            let foo = match[0] + puzzle.slice(match.index + match[0].length,);
            // console.log("foo: " + foo);
            // console.log("Process "+match[0]);
            result = calculate(puzzle.slice(0,match.index) + calculate(match[0]) + puzzle.slice(match.index + match[0].length,));
        } else {
            // console.log("no brackets");
            // process the first two terms

            match = puzzle.match(/\d+ [\*] \d+/);
            if (match) {
                // console.log(match);
                // console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
                let foo = match[0] + puzzle.slice(match.index + match[0].length,);
                // console.log("foo: " + foo);
                // console.log("Process "+match[0]);
                result = calculate(puzzle.slice(0,match.index) + calculate(match[0]) + puzzle.slice(match.index + match[0].length,));
            }
        }
    }
    return result;
}