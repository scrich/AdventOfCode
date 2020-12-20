const DEBUG = false;

message = "ab";
let rules = [];

// prepare the rules
inputrules = inputrules.split(/\n/);
DEBUG && console.log(inputrules);

for (let input of inputrules) {
    // get the id and the rule
    DEBUG && console.log(input);
    let match = input.match(/(^\d+)/);
    let id = match[0];
    let rule = input.slice(match[0].length + 2,)
    DEBUG && console.log(match);
    DEBUG && console.log(id);
    DEBUG && console.log(rule);
    rules[id] = rule;
}
DEBUG && console.log("## rules:"), console.log(rules);
// rules are now in an array where array index is the rule number

// prepare the messages
messages = messages.split(/\n/);
DEBUG && console.log("## messages:"), console.log(messages);

// now process the messages according to the rules

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

// build the regex
// recursive function
// let reTest = new RegExp;
// reTest = buildRegex(0);
// reTest = new RegExp(/^/.source + reTest.source + /$/.source)

reTestStr = "^" + buildRegexStr(0) + "$";
reTest = new RegExp (reTestStr);

// now test the messages

let success = 0;

for (let message of messages) {
    if (reTest.test(message)) {
        success ++;
        console.log ("true: " + message);
    } else {
        console.log ("fail: " + message);
    }
}

document.write("<h2>Successful messages</h2>");
document.write(success);

// DEBUG && console.log("ReTest " + reTest);

function buildRegex(rulenum) {
    DEBUG && console.log("called buildRegex with rulenum " + rulenum);
    let re = new RegExp;
    let reStr; // string for compiling the regex

    const regexStr = /^"\w"$/;
    const regexNums = /^[\d\s]+$/;          // digits all the way through
    const regexOr = /^[\d\s]+\|*[\d\s]+$/;   // digits and an 'or' pipe

    // look up rule
    // test what kind of rule it is - either numbers or text in quotes
    // if text in quotes, return the value

    if (regexStr.test(rules[rulenum])) {
        re = new RegExp(rules[rulenum].slice(1, -1));
    }

    if (regexOr.test(rules[rulenum])) {
        // it's a string of numbers we have to look up
        // without 'or'
        // re_con = new RegExp(re_a.source + re_b.source)

        let subrules = rules[rulenum].split(" ");
        DEBUG && console.log("subrules" + subrules);

        for (let subrule of subrules) {
            if (subrule == "|") {
                re = new RegExp(re.source + "|");
            } else {
                if (re.source == "(?:)") {
                    re = new RegExp(buildRegex(subrule).source);
                } else {
                    re = new RegExp(re.source + buildRegex(subrule).source);
                }
            }
        }
    }

    DEBUG && console.log("buildRegex (" + rulenum + ") returning " + re);
    return re;
}


function buildRegexStr(rulenum) {
    DEBUG && console.log("called buildRegexStr with rulenum " + rulenum);
    //let re = new RegExp;
    let reStr=""; // string for compiling the regex

    const regexStr = /^"\w"$/;
    const regexNums = /^[\d\s]+$/;          // digits all the way through
    const regexOr = /^[\d\s]+\|*[\d\s]+$/;   // digits and an 'or' pipe

    // look up rule
    // test what kind of rule it is - either numbers or text in quotes
    // if text in quotes, return the value

    if (regexStr.test(rules[rulenum])) {
        reStr = rules[rulenum].slice(1, -1);
    }

    if (regexOr.test(rules[rulenum])) {
        // it's a string of numbers we have to look up
        // without 'or'
        // re_con = new RegExp(re_a.source + re_b.source)

        let subrules = rules[rulenum].split(" ");
        DEBUG && console.log("subrules" + subrules);

        reStr = reStr + "(";
        for (let subrule of subrules) {
            if (subrule == "|") {
                reStr = reStr + "|";
            } else {
                
                    reStr = reStr + buildRegexStr(subrule);
                
            }
        }
        reStr = reStr + ")";
    }

    DEBUG && console.log("buildRegexStr (" + rulenum + ") returning " + reStr);
    return reStr;
}

