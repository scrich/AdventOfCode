let x,y,z;


function setup() {
    createCanvas(400,400);
    let x=y=z=30;

    grid = make3DArray(x,y,z);
    next = make3DArray(x,y,z);
    
}

function draw() {
    background(51);
}


function make3DArray(x,y,z) {
    let arr = new Array(x);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(y);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = new Array(z);
      }
    }
    return arr;
  }