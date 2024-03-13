/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Set complete mulitiple by multiplying all numbers
    let zerosCount = 0
    const multiple = nums.reduce((a, b) => {
        if (b === 0) zerosCount++
        return a * b
    }, 1)
    const output = []
    // if zero do one thing
    if (multiple != 0) {
        for (let i = 0; i < nums.length; i++) {
            output[i] = multiple / nums[i]
        }
    } else if (zerosCount === 1) {
        const multipleWithoutZeros = nums.reduce((a, b) => {
            if (b === 0) return a
            return a * b
        }, 1)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                output[i] = 0
            } else {
                output[i] = multipleWithoutZeros
            }
        }
    } else {
        return new Array(nums.length).fill(0)
    }

    // if one zero
    // if more than one zero
    return output
};