/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    gridLen = grid[0].length
    gridWid = grid.length
    islandCount = 0
    uniqueCount = 0
    console.log('len: ', gridLen, 'wid: ', gridWid)

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

            console.log('plot: ', plot, 'plotTag: ', plotTag, 'l: ', l, 'r: ', r, 't: ', t, 'b: ', b)

            if (plot === '1') {
                console.log('LAND!')
                //  if l, r, b, t is not there than curr plotTag is unique
                    //  && input into dict with incremented uniqueCount
                //  if l, r, b, or t is there, curr plotTag is not unique
                    //  && input into dict with curr uniqueCount
                if (dict[lTag]) {
                  //  left plot exists, currPlot is no longer unique
                  uniqueFlag = false
                } else {
                  //  left plot exists, currPlot is still unique
                }

                //  at the end of the side checks, if uniqueFlag is true than
                //  that means that this plot of land is unique
                dict[plotTag] = uniqueCount

                if (l === 2345) {

                } else if (!l && !r && !t && !b) {
                    //  lone island check and raise count

                    islandCount++

                } else {

                }
                // islandCount++
            }
        }


    }

    return islandCount
};

let island = ['11000', '11000', '00100', '00011']

numIslands(island)
