/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xS = x.toString(2), xLen = xS.length
    let yS = y.toString(2), yLen = yS.length

    let diffs = 0
    let max = Math.max(xLen, yLen)
    max === xLen ? (ans = xLen - yLen) : (ans = yLen - xLen)

    console.log('xS: ', xS, 'yS: ', yS, 'max: ', max)

    for (let i = xS.length; i >= 0; i--) {
        xCount++
    }

    // for (let i = yS.length; i >= 0; i--) {
    //     yCount++
    // }


    return diffs
};

let x1 = 93, y1 = 73
hammingDistance(x1, y1)
