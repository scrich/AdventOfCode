const DEBUG = false;
const VERBOSE = true;

var accumulator = 0;
let instruction = 0;
let log = [];
for (let i = 0; i < input.length; i++) {
    log[i] = 0;
}

function execute(command, line) {
    command_parts = command.split(" ");
    operation = command_parts[0];
    argument = command_parts[1];

    // DEBUG && console.log(command_parts);

    log[line]++;

    if (log[line] > 1) {
        console.log ("Loop! at line " + line + ". Acc =" + accumulator);
        return -1;
    }

    switch (operation) {
        case "acc":
            //
            DEBUG && console.log ("operation: acc");
            accumulator += parseInt(argument);
            DEBUG && console.log ("accumulator: " + accumulator);
            DEBUG && console.log ("line: " + line);
            line ++;
            break;
        case "jmp":
            //
            DEBUG && console.log ("operation: jmp");
            line += parseInt(argument);
            break;
        case "nop":
            //
            DEBUG && console.log ("operation: nop");
            line ++;
            break;
        default:
            // nothing
    }

    DEBUG && console.log ("next: " + line);
    return line;

}


// for (i = 1; i < 100; i++) {
//     VERBOSE && console.log(i + ": "+instruction + " " + input[instruction]);
//     instruction = execute(input[instruction], instruction);

// }

let counter = 0;
while (instruction != -1) {
    VERBOSE && console.log(counter + ": "+instruction + " " + input[instruction]);
    instruction = execute(input[instruction], instruction);
    counter ++;

}