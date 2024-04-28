/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo = [0, 0]
    for (let i = 2; i < nums.length + 2; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i - 2], memo[i - 1])
    }
    return memo[nums.length + 1]
}
