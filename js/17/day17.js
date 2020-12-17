let x = 9;
  let y = 9
  let z = 9;
resolution = 10;


function setup() {
  createCanvas(400, 400, WEBGL);
  

  grid = make3DArray(x, y, z);
  next = make3DArray(x, y, z);

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        grid[i][j][k] = 0;
      }
    }
  }
}

function draw() {
  background(51);

  // render

  // 9 grids of 9x9

  // z = 0

  let k = 0;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let x_ = i * resolution;
      let y_ = j * resolution;
      if (grid[i][j][k] == 1) {
        fill(0);
        stroke(0);
        
      } else {
        fill(255);
        stroke(0); 
      }
      rect(x_, y_, resolution - 1, resolution - 1);
    }
  }
}


function make3DArray(x, y, z) {
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(y);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(z);
    }
  }
  return arr;
}