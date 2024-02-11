/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function (n) {
    let memo = {}
    const dfs = (sum) => {
        if (memo[sum]) return memo[sum]
        if (sum === 0) return 0
        if (sum < 0) return false
        let min = Number.MAX_VALUE
        for (let i = 1; i * i <= sum; i++) {
            let square = i * i
            let success = dfs(sum - square)
            if (success !== false) {
                min = Math.min(min, success + 1)
            }
        }
        memo[sum] = min
        return min
    }
    return dfs(n)
}
