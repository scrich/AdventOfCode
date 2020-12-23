const DEBUG = true;

let target = 1721308972;
// let target = 127;

numbers = input.map(function(item){
    return parseInt(item);
});

for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    for (let j = i; j < numbers.length; j++) {
        sum += numbers[j];
        if (sum==target) {
            console.log("first:"+numbers[i]+", last:"+numbers[j]);
            console.log("number: "+numbers[i]+numbers[j]);
        }
        if (sum > target) {continue;}
    }
}