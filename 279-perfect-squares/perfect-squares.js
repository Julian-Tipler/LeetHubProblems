/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function (n) {
    // keeps track of minimum count for each sum
    let memo = {}
    const dfs = (sum) => {
        // if the dfs for this sum exists, return the count
        if (memo[sum]) return memo[sum]
        // if the sum is now 0 return a count of 0
        if (sum === 0) return 0

        let min = Number.MAX_VALUE
        // iterate through each of the squares (less than current sum)
        for (let i = 1; i * i <= sum; i++) {
            let square = i * i
            // count is equal to the dfs of the sum - current square (which may be memoized)
            let count = dfs(sum - square) + 1
            min = Math.min(min, count)
        }
        // at this point the min is the minimum count for the current sum, and can be memoized
        memo[sum] = min
        return min
    }
    return dfs(n)
}
