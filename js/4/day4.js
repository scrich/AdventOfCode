// change space to newline
// break at newline * 2 into passport chunks

input = input.replace(/ /g, "\n" ).replace(/\n\n/g, "\n*").replace(/\n/g, ",");

input2 = input.split("*");

let passports = []; // array of passports

for (record of input2) {
    parserecord(record);
}

//console.log(passports);

result = passports.filter(validatePassport);

document.write("<h1>Regular check</h1>");
document.write(result.length);
document.write("\n\n");

result = passports.filter(enhancedPassport);
document.write("<h1>Enhanced check</h1>");
document.write(result.length);
document.write("\n\n");

function parserecord(record) {
    let passport = {}; 
    if (record.slice(-1)==",") {
    record = record.slice(0,-1);
    // get rid of trailing comma
    }
    attrs = record.split(",");

    for (kv of attrs) {
        let key = kv.split(":")[0];
        let val = kv.split(":")[1];
        passport[key]= val;
    }

    passports.push(passport);
}

function validatePassport(passport) {
    // valid if
        
    // all 8 fields are present
    if (Object.keys(passport).length == 8) {
        return true;
    } 

    if (Object.keys(passport).length == 7 && !Object.keys(passport).includes("cid")) {
    // or 7 fields, but cid absent
    // ["byr", "cid", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"]
    return true;
    }

    return false;
}

function enhancedPassport(passport) {
    let valid = false;

    let fields = validatePassport(passport);

    if (!fields) {
        return false;
    }

   
    // byr
    let byr = (
        passport["byr"].length == 4 
        && 
        parseInt(passport["byr"]) >= 1920 
        && 
        parseInt(passport["byr"]) <= 2002
        );

    // iyr
    let iyr = (
        passport["iyr"].length == 4 
        && 
        parseInt(passport["iyr"]) >= 2010 
        && 
        parseInt(passport["iyr"]) <= 2020
        );

    // iyr
    let eyr = (
        passport["eyr"].length == 4 
        && 
        parseInt(passport["eyr"]) >= 2020 
        && 
        parseInt(passport["eyr"]) <= 2030
        );

    // hgt
    let hgt = checkhgt(passport);
    
    // hcl
    let hcl = checkhcl(passport);

    // ecl
    let ecl = checkecl(passport);

    // pid
    let pid = checkpid(passport);
    console.log(passport);
    console.log(fields,byr,iyr,eyr,hgt,hcl,ecl,pid);
    return fields && byr && iyr && eyr && hgt && hcl && ecl && pid;
    
}

function checkpid(passport) {
    let val = passport["pid"];
    let re = new RegExp(/^\d{9}$/);
    return re.test(val);
}

function checkecl(passport) {
    let val = passport["ecl"];
    let eyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return eyes.includes(val);
}

function checkhcl(passport) {
    let val = passport["hcl"];
    let re = new RegExp(/#[0-9a-f]{6}/);
    return re.test(val);
}

function checkhgt(passport) {
    let hgtval = passport["hgt"];
    // let re = new RegExp(/\d+["in"|"cm"]/);
    // pattern = re.test(hgtval);
    // if (!pattern) {
    //     return false;
    // }

    re = new RegExp(/\d/);
    let height = parseInt(hgtval.match(new RegExp(/\d+/)));
    
    let units = hgtval.slice(-2);
    

    if (!(units == "in" || units == "cm")) {
        return false;
    }

    if (units == "in") {
        if (height < 59 || height > 76) {
            return false;
        }
    }

    if (units == "cm") {
        if (height < 150 || height > 193) {
            return false;
        }
    }
    return true;
}

