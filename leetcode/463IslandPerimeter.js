/**
* @param {number[][]} grid
* @return {number}
*/
var islandPerimeter = function(grid) {
  let perim = 0

  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j ++) {
      let plot = grid[i][j]
      // console.log('plot: ', plot)

      let sides = 4

      let l = grid[i][j-1]
      let r = grid[i][j+1]
      let t = grid[i-1] ? grid[i-1][j] : undefined
      let b = grid[i+1] ? grid[i+1][j] : undefined

      if (plot) {
        // console.log('l: ', l);
        // console.log('r: ', r);
        // console.log('t: ', t);
        // console.log('b: ', b);
        if (l) sides--
        if (r) sides--
        if (t) sides--
        if (b) sides--
        // console.log('total sides: ', sides)
        perim += sides
      }

    }
  }
  // console.log('perim: ', perim);
  return perim
};

myGrid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

islandPerimeter(myGrid)

//  Answer: 16 sides
