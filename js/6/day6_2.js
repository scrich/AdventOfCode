// https://adventofcode.com/2020/day/6

// probably python best

// group the records

// mark \n\n with *

input = input.replace(/\n\n/g, '*');
input = input.replace(/\n/g, "%");

let groups = input.split("*");
let records = []
for (let group of groups) {
    let votes = group.split("%");
    records.push(votes);
}



// get the first record
// filter it against the second record, and so on
// letters in all records are counted

let yescount = 0;

for (let i = 0; i < records.length; i++) {
    console.log(records[i]);
    let first = records[i][0].split("");
    console.log(first);
    if (records[i].length == 1) {
        yescount += first.length;
    } else {
        for (let j = 1; j < records[i].length; j++) {
            compare = records[i][j].split("");
            // filter first with all the elements of 
            first = filterArray(first, compare);
        }
        first.sort();
        yescount += first.length;
        console.log("first " + first);
    }
}

function filterArray(a,b) {
    let result = a.filter(elem => b.includes(elem));
    return result;
}

// for (let record in records) {
//     //let numrecords = record.length;
//     console.log("record" + record);
//     //console.log(numrecords);
//     let first = record[0];
//     console.log("first" + first);
//     for (let i=1; i<record.length; i++){

//     }
//     // let start = [...new Set(record)];
//     // console.log(start);
// }

//uniq = [...new Set(array)];




console.log("count: " + yescount);