// https://adventofcode.com/2020/day/16

// identify tickets invalid for any field
// apply all rules to every field

// Rules *******************************
rules = rules.replaceAll(": ", ":");
rules = rules.split(/\n/);

let validation_rules = [];

for (let rule of rules) {
    rule = rule.split(/:| or /);
    validation_rules.push(rule);
}

console.log(validation_rules);

// console.log(rules);
// console.log(validation_rules);

// min: 25
// max: 973

// ticket scanning error rate = sum of invalid values

function global_invalid(n) {
    if (25 <= n && n <= 973) {
        return false;
    } else {
        return true;
    }
}

function testRule(rule, n) {
    // takes a rule in 3 parts and makes a logical statement from it
    // eg ["departurelocation", "40-152", "161-969"]
    let rulename = rule[0];
    let range1 = rule[1].split("-");
    let range2 = rule[2].split("-");

    let n1 = parseInt(range1[0]);
    let n2 = parseInt(range1[1]);
    let n3 = parseInt(range2[0]);
    let n4 = parseInt(range2[1]);

    return (n1 <= n && n <= n2) || (n3 <= n && n <= n4);
}

// discard invalid records
// split the tickets into rows

let tickets = nearby_tickets.split(/\n/);
let valid_tickets = [];
let invalid_tickets = [];

for (let ticket of tickets) {
    let values = ticket.split(/,/);
    // console.log(values);
    // discard if any field is invalid
    let errors = values.filter(global_invalid).length;
    // console.log(errors);
    if (errors == 0) {

        valid_tickets.push(values);
    } else {
        invalid_tickets.push(values);
    }
}

// 190 valid tickets

// work out the order of the fields

//make a column for each field

let cols = [];

for (let i = 0; i < 20; i++) {
    let temp = [];
    for (let ticket of valid_tickets) {
        temp.push(ticket[i])
    }
    cols.push(temp);
}

// cols now contains the 20 columns

for (let r = 0; r < 20; r++) {
    let total = 0;
    let rule = validation_rules[r];

    //console.log(rule[0]);

    for (let col = 0; col < cols.length; col++) {
        let thiscol = cols[col];
        //console.log(thiscol);
        let pass = 0;
        let fail = 0;
        for (let i = 0; i < thiscol.length; i++) {
            if (testRule(rule, parseInt(thiscol[i]))) {
                pass++;
            } else {
                fail++;
            }
        }
        if (pass == 190) {
            total++;
            console.log("col: " + col + " rule " + rule[0] + " pass: " + pass);
        }
    }
    console.log(total + " " + rule[0]);
}


