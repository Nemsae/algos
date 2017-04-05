/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xS = x.toString(2), xLen = xS.length
    let yS = y.toString(2), yLen = yS.length


    let xCount = 0
    let yCount = 0

    console.log('xS: ', xS, 'yS: ', yS)

    // for (let i = xS.length; i >= 0; i--) {
    //     xCount++
    // }

    // for (let i = yS.length; i >= 0; i--) {
    //     yCount++
    // }

    let max = Math.max(xLen, yLen)
    let ans

    max === xLen ? (ans = xLen - yLen) : (ans = yLen - xLen)

    return ans


};

let x1 = 93, y1 = 73
hammingDistance(x1, y1)
