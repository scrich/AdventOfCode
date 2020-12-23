const DEBUG = true;

let preamble;
preamble = 25;

function possiblesums(arr) {
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sums.push(parseInt(arr[i]) + parseInt(arr[j]));
        }
    }
    return sums;
}

let codevalid = [];
let codeinvalid = [];
for (let i = preamble; i < input.length; i++) {
    let current = parseInt(input[i]);
    let testarray = possiblesums(input.slice(i - preamble, i))
    console.log(current);
    console.log(testarray);
    if (testarray.includes(current)) {
        codevalid.push(current);
    } else {
        codeinvalid.push(current);
    }
    
}

console.log("invalid " + codeinvalid);