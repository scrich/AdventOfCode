numbers = arr.map(function(item){
    return parseInt(item);
});

let total = numbers.reduce((a,b) => a+b, 0);

console.log(total);

console.log(Math.min(...numbers) + Math.max(...numbers));