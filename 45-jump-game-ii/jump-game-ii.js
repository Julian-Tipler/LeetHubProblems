/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let minArray = new Array(nums.length).fill(Number.MAX_VALUE)
    minArray[nums.length - 1] = 0
    const dfs = (index) => {
        // make sure to return if num exists already
        if (minArray[index] < Number.MAX_VALUE) return minArray[index]
        else if (index > nums.length - 1 || nums[index] === 0) {
            return false
        }

        // We are calculating the minNumberJumps to get to the end from this spot
        let minNumberJumps = Number.MAX_VALUE
        for (let d = 1; d <= nums[index]; d++) {
            const jumps = dfs(index + d)
            if (jumps === false) {
                continue
            }
            minNumberJumps = Math.min(minNumberJumps, jumps + 1)
        }
        minArray[index] = minNumberJumps
        return minArray[index]
    }
    dfs(0)
    return minArray[0]
};