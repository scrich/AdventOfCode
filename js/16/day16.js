// https://adventofcode.com/2020/day/16

// identify tickets invalid for any field
// apply all rules to every field

// Rules
rules = rules.replaceAll(": ", ":");
rules = rules.split(/\n/);

let validation_rules = [];

for (let rule of rules) {
    rule = rule.split(/:| or /);
    validation_rules.push(rule);
    document.write("<code>");
    document.write(rule);
    document.write("</code>");
    document.write("<br />");
}

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

let all_tickets = nearby_tickets.split(/,|\n/);

let all_invalid = all_tickets.filter(global_invalid);
console.log(all_invalid);

// sum of invalid

let scanning_error = all_invalid.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
}, 0);

console.log("error: " + scanning_error);

function writeRule(rule) {
    // takes a rule in 3 parts and makes a logical statement from it
}

// discard invalid records
// split the tickets into rows

let tickets = nearby_tickets.split(/\n/);
let valid_tickets = [];

for (let ticket of tickets) {
    let values = ticket.split(/,/);
    // console.log(values);
    // discard if any field is invalid
    let errors = values.filter(global_invalid).length;
    // console.log(errors);
    if (errors == 0) {

        valid_tickets.push(values);
    }
}

console.log(valid_tickets);
console.table(valid_tickets);
// 190 valid tickets

// work out the order of the fields

// function validate_departurelocation(n) {
//     return ((40 <= n && n <= 152) || (161 <= n && n <= 969))
// }

// 20 fields. Assume only one is valid for each class
let error_count;

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departurelocation(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departurelocation" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departurestation(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departurestation" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departureplatform(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departureplatform" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departuretrack(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departuretrack" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departuredate(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departuredate" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_departuretime(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_departuretime" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_arrivallocation(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_arrivallocation" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_arrivalstation(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_arrivalstation" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_arrivalplatform(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_arrivalplatform" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_arrivaltrack(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_arrivaltrack" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_class(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_class" + "col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_duration(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_duration" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_price(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_price" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_route(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_route" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_row(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_row" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_seat(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_seat" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_train(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_train" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_type(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_type" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_wagon(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_wagon" + " col: " + i);
    }
}

// validation field
error_count = 0;
for (let i = 0; i < 20; i++) {
    for (let ticket of valid_tickets) {
        if (!validate_zone(ticket[i])) {
            error_count++;
        }
    }
    if (error_count == 0) {
        console.log("validate_zone" + " col: " + i);
    }
}

