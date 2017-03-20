/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0
    gridLen = grid[0].length
    gridWid = grid.length
    islandCount = 0
    uniqueCount = 0
    currLand = 1
    landConflict = false

    let dict = {}

    for (let i = 0; i < gridWid; i++) {
        for (let j = 0; j < gridLen; j++) {
            let plot = grid[i][j]
            let plotTag = `${i}${j}`
            let l = grid[i][j-1]
            let lTag = `${i}${j-1}`
            let r = grid[i][j+1]
            let rTag = `${i}${j+1}`
            let t = (grid[i-1] ? grid[i-1][j] : undefined)
            let tTag = `${i-1}${j}`
            let b = (grid[i+1] ? grid[i+1][j] : undefined)
            let bTag = `${i+1}${j}`

            let uniqueFlag = true

            let conflictCheck = 0

            // console.log('plot: ', plot, 'plotTag: ', plotTag, 'l: ', l, 'r: ', r, 't: ', t, 'b: ', b)

            if (plot === '1') {
                console.log('LAND!')
                //  if l, r, b, t is not there than curr plotTag is unique
                    //  && input into dict with incremented uniqueCount
                //  if l, r, b, or t is there, curr plotTag is not unique
                    //  && input into dict with curr uniqueCount
                if (dict[lTag]) {
                  //  left plot exists, currPlot is no longer unique
                  uniqueFlag = false
                  // if (dict[lTag] !== conflictCheck)

                  currLand = dict[lTag]
                } else {
                  //  left plot exists, currPlot is still unique
                }
                if (dict[rTag]) {
                  //  right plot exists, currPlot is no longer unique
                  uniqueFlag = false
                  currLand = dict[rTag]
                } else {
                  //  right plot exists, currPlot is still unique
                }
                if (dict[tTag]) {
                  //  top plot exists, currPlot is no longer unique
                  uniqueFlag = false
                  currLand = dict[tTag]
                } else {
                  //  top plot exists, currPlot is still unique
                }
                if (dict[bTag]) {
                  //  bot plot exists, currPlot is no longer unique
                  uniqueFlag = false
                  currLand = dict[bTag]
                } else {
                  //  bot plot exists, currPlot is still unique
                }

                //  After checking all sides, if uniqueFlag is false we mark the
                //  the plot of land into our dict with the uniqueCount to signify
                //  which body of land we are currently exploring
                //  If uniqueFlag is true, we mark our dict with the same info,
                //  but with the a different uniqueCount (incremented).

                if (!uniqueFlag) {
                  dict[plotTag] = currLand
                } else {
                  uniqueCount++
                  dict[plotTag] = uniqueCount
                }
            }

            // console.log('dict: ', dict);
        }


    }

    //  Get all values from dict and return max
    //  if landConflict, subtract from max and return it
    let max = 0

    // console.log('dict: ', dict);
    // console.log(Object.values(dict))
    if (!uniqueCount) return 0
    islandCount = Math.max(...Object.values(dict))

    return islandCount
};

let island = ['11000', '11000', '00100', '00011']
// 11000
// 11000
// 00100
// 00011

let island2 = ['11011', '10011', '11110', '00001']
// 11011
// 10011
// 11110
// 00001

let island3 = ['111', '010', '111']
// 111
// 010
// 111

// numIslands(island)
// numIslands(island2)
numIslands(island3)
