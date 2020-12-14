// change space to newline
// break at newline * 2 into passport chunks

input = input.replace(/ /g, "\n" ).replace(/\n\n/g, "\n*").replace(/\n/g, ",");

input2 = input.split("*");

let passports = []; // array of passports

for (record of input2) {
    parserecord(record);
}

// use a class? input as the big string?
class Passport{
    
}


function parserecord(record) {
    let passport = {}; 
    record = record.slice(0,-1);
    // get rid of trailing comma

    attrs = record.split(",");

    console.log(record);
    console.log(attrs);

    for (kv of attrs) {
        let key = kv.split(":")[0];
        let val = kv.split(":")[1];
        passport[key]= val;
    }
    console.log(passport);
    passports.push(passport);
}

// Object.keys(passports[0]).length