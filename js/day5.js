let tickets = input.split("\n");


//convert string to binary
/*
BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.
*/

// B = back = 1
// F = front = 0

// R = 1
// L = 0

let seats = tickets.map(getSeat);
let maxSeatID = seats.reduce(function(a,b) {
    return Math.max(a,b);
});

let minSeatID = seats.reduce(function(a,b) {
    return Math.min(a,b);
});

document.write("<h2>Max Seat ID</h2>");
document.write(maxSeatID);

// sum of all seats
// compare to what the sum should be

let sumSeatID = seats.reduce(function(a,b) {
    return a+b;
}, 0);

// should be seats.length + 1 tickets
let shouldSumSeatID = (maxSeatID + minSeatID) * (seats.length+1)/2;

let myticket = shouldSumSeatID - sumSeatID;
document.write("<h2>My ticket</h2>");
document.write(myticket);

// total of list

function getSeat(ticket) {
    // chop up the string into row and col
    let code = ticket.replace(/[BR]/g,"1").replace(/[FL]/g,"0");
    let rowbin = code.slice(0,7);
    let colbin = code.slice(-3);
    console.log(ticket, rowbin, colbin);

    let row = parseInt(rowbin,2);
    let col = parseInt(colbin,2);

    seatID = row * 8 + col;
    // return [row,col, seatID];
    return seatID;
}