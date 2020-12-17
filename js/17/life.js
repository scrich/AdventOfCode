let grid;
let next;
let cols
let rows;
let resolution = 20;
let output;



function setup() {
  createCanvas(80, 80);

  output = createP('output');
  cols = width/resolution;
  rows = height/resolution;

  grid = make2DArray(cols, rows);
  next = make2DArray(cols, rows);

  for (let i=0; i < cols; i++) {
    for (let j=0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);

  //let next = make2DArray(cols, rows);

  // compute next based on grid

  for (let i=0; i < cols; i++) {
    for (let j=0; j < rows; j++) {

      // edges
      // if (i==0 || i==cols-1 || j ==0 || j == rows-1) {
      //   next [i][j] = grid [i][j];
      // } else {
      let sum = 0;
      let neighbours = countNeighbours(grid, i,j);
      let state = grid[i][j];

      // rule 1
      if (state==0 && neighbours ==3) {
        next[i][j] = 1;
      } else if (state==1 && (neighbours< 2 || neighbours >3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }

    }

    output.html(getOutput(grid));
    //}
  }

  // render

  

  for (let i=0; i < cols; i++) {
    for (let j=0; j < rows; j++) {
      let x = i*resolution;
      let y = j*resolution;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x,y,resolution-1, resolution-1);
      }
    }
  }

  grid = next;

}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function countNeighbours(grid, x,y) {
  let sum = 0;
  for (let i=-1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {

      let col = (x+i+cols) % cols;
      let row = (y+j+rows) % rows;

      sum += grid[col][row];
    }
  }
  sum -=grid[x][y];
  return sum;
}

function getOutput(arr) {
  let output = 0;
  for (let i=0; i < arr.length; i++) {
    let value = 8*arr[i][0]+ 4* arr[i][1]+ 2* arr[i][2]+ arr[i][3];
    output += value;
    output *= 2;
    }
    return output;
  }

// function arrayToBinary (arr) {
//   let value = 0;
//   for (i=0; i < arr.length; i++) {
//     value << 1;
//     value += arr[i];
    
//   }
// }