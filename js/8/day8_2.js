const DEBUG = false;
const VERBOSE = false;
var accumulator;
let log;
let instruction;

for (let j = 0; j < input.length; j++) {
    if (input[j].includes("acc")) {
        continue;
    } else {
        swapnopjmp(j);
    }
    // initialise
    accumulator = 0;
    instruction = 0;
    log = [];
    for (let i = 0; i < input.length; i++) {
        log[i] = 0;
    }

    // parse the file
    let output = parseInput();
    console.log("j=" + j + ". output " + output + ". accumulator " + accumulator);

    swapnopjmp(j);

}

function swapnopjmp(j) {
    command_parts = input[j].split(" ");
    operation = command_parts[0];
    argument = command_parts[1];

    if (operation == "nop") {
        input[j] = "jmp " + argument;
    } else {
        input[j] = "nop " + argument;
    }
}

//// FUNCTIONS ////

function execute(command, line) {
    command_parts = command.split(" ");
    operation = command_parts[0];
    argument = command_parts[1];

    // DEBUG && console.log(command_parts);

    log[line]++;

    if (log[line] > 1) {
        console.log("Loop! at line " + line + ". Acc =" + accumulator);
        return -1;
    }

    switch (operation) {
        case "acc":
            //
            DEBUG && console.log("operation: acc");
            accumulator += parseInt(argument);
            DEBUG && console.log("accumulator: " + accumulator);
            DEBUG && console.log("line: " + line);
            line++;
            break;
        case "jmp":
            //
            DEBUG && console.log("operation: jmp");
            line += parseInt(argument);
            break;
        case "nop":
            //
            DEBUG && console.log("operation: nop");
            line++;
            break;
        default:
        // nothing
    }

    DEBUG && console.log("next: " + line);
    return line;

}


// for (i = 1; i < 100; i++) {
//     VERBOSE && console.log(i + ": "+instruction + " " + input[instruction]);
//     instruction = execute(input[instruction], instruction);

// }

function parseInput() {
    let counter = 0;
    while (instruction != -1) {

        if (instruction == input.length) {
            console.log("request to execute command after last command");
            console.log("terminating");
            break;
        }
        VERBOSE && console.log(counter + ": " + instruction + " " + input[instruction]);
        instruction = execute(input[instruction], instruction);
        counter++;

    }
    return instruction;
}

