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
    // max === xLen ? (ans = xLen - yLen) : (ans = yLen - xLen)
    // for (let i = max; i >= 0; i--) {
    //
    // }
    // console.log('xS: ', xS, 'yS: ', yS)

    console.log('xS: ', xS, 'yS: ', yS, 'max: ', max)


    for (let i = 0; i < max; i++) {
      let xEle = xS[i]
      let yEle = yS[i]

      if (xEle !== yEle) diffs++

      console.log('xEle: ', xEle);
      console.log('yEle: ', yEle);
    }

    console.log('Hamming Distance is ', diffs)
    return diffs
};

let x1 = 93, y1 = 73
hammingDistance(x1, y1)
