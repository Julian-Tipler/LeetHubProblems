/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const output = []
    // dfs with a for loop and add the array at each layer
    const dfs = (n, arr) => {
        // if n is longer than nums stop
        output.push(arr)
        if (n === nums.length) return
        for (let i = n; i < nums.length; i++) {
            dfs(i + 1, [...arr, nums[i]])
        }
    }
    dfs(0, [])
    return output
};