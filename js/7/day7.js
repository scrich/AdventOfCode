const DEBUG = true;

// https://adventofcode.com/2020/day/7

// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

let luggage = {};

for (let phrase of input) {
    createBagNode(phrase);
}



function createBagNode(phrase) {
    // split the phrase up
    // work out the value
    // work out the decendents
    // eg muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
    let hierarchy = phrase.split(" contain ");
    let node = hierarchy[0];
    let children = hierarchy[1];
    DEBUG && console.log(hierarchy);
    DEBUG && console.log(node);
    DEBUG && console.log(children);
    node = node.replace(/^([\w\s]+?) bags/, '$1');
    DEBUG && console.log("node >" + node + "<");
    // should I be using an object?
    let thisbag = new BagNode(node);
    DEBUG && console.log(thisbag);
    luggage[node] = thisbag;
    if (children != "no other bags.") {
        thisbag.descendents = cleanChildren(children);
    }
}

function cleanChildren(dirtyChildren) {
    // eg clean up 3 bright white bags, 4 muted yellow bags
    let arr = [];
    for (let child of dirtyChildren.split(",")) {
        DEBUG && console.log("child> "+child);
    }



    return arr;
}




