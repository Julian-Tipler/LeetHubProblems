/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const sorted = nums.sort((a, b) => a - b)
    let l = 0
    let r = nums.length - 1
    let count = 0

    while (r > l) {
        const sum = sorted[r] + sorted[l]
        if (sum === k) {
            count++
            l++
            r--
        }
        else if (sum < k) {
            l++
        }
        else if (sum > k) {
            r--
        }

    }
    return count
};