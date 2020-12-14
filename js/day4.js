// change space to newline
// break at newline * 2 into passport chunks

input = input.replace(/ /g, "\n" ).replace(/\n\n/g, "\n*").replace(/\n/g, ",");

input2 = input.split("*");

for (record of input2) {
    
}

// use a class? input as the big string?