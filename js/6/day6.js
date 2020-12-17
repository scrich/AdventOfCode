// https://adventofcode.com/2020/day/6

// probably python best

// group the records

// mark \n\n with *

input = input.replace(/\n\n/g, '*');
input = input.replace(/\n/g,"");

let forms = input.split("*");


//uniq = [...new Set(array)];

let yescount = 0
for (let form of forms) {
    uniq = new Set(form);
    console.log(uniq);
    yescount += uniq.size;
}

console.log ("count: " + yescount);