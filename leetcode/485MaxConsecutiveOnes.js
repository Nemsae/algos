/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let oneFlag = false
    let currTotal = 0

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (num) {
            if (!oneFlag) {
                oneFlag = true
                currTotal = 1
                currTotal > max ? max = currTotal : max
            } else {
                currTotal++
                currTotal > max ? max = currTotal : max
            }
        } else {
            oneFLag = false
            currTotal > max ? max = currTotal : max
            currTotal = 0
        }


    }
    console.log(max)
    return max
};

myNums = ([1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0])

findMaxConsecutiveOnes(myNums)
