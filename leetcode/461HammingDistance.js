
//  SOLUTION 2: Trying to compare strings without having to use split() and reverse()
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

    console.log('xS: ', xS, 'yS: ', yS, 'max: ', max)

    for (let i = max; i >= 0; i--) {
      let xEle = xS[i]
      let yEle = yS[i]

      xEle === undefined ? xEle = '0' : xEle = xEle
      yEle === undefined ? yEle = '0' : yEle = yEle

      if (xEle !== yEle) {
        console.log('No Match!')
        diffs++
      }

      console.log('xEle: ', xEle);
      console.log('yEle: ', yEle);
    }

    console.log('Hamming Distance is ', diffs)
    return diffs
};

let x1 = 1, y1 = 4
// let x1 = 93, y1 = 73
hammingDistance(x1, y1)



//  SOLUTION 1
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xS = x.toString(2).split('').reverse().join(''), xLen = xS.length
    let yS = y.toString(2).split('').reverse().join(''), yLen = yS.length

    let diffs = 0
    let max = Math.max(xLen, yLen)

    console.log('xS: ', xS, 'yS: ', yS, 'max: ', max)

    for (let i = 0; i < max; i++) {
      let xEle = xS[i]
      let yEle = yS[i]

      xEle === undefined ? xEle = '0' : xEle = xEle
      yEle === undefined ? yEle = '0' : yEle = yEle

      if (xEle !== yEle) {
        console.log('No Match!')
        diffs++
      }

      console.log('xEle: ', xEle);
      console.log('yEle: ', yEle);
    }

    console.log('Hamming Distance is ', diffs)
    return diffs
};

// let x1 = 1, y1 = 4
// // let x1 = 93, y1 = 73
// hammingDistance(x1, y1)
