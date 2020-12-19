const DEBUG = true;

message = "ab";
let rules = [];

// inputrules = `0: 1 2
// 1: "a"
// 2: 1 3 | 3 1
// 3: "b"`;

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

// for (let i=0; i < rules.length; i++) {
//     let re = new RegExp("^"+i+": ");
//     DEBUG && console.log(re);
//     rules[i] = rules[i].replace(re,"");
// }

DEBUG && console.log(rules) ;
// rules are now in an array where

