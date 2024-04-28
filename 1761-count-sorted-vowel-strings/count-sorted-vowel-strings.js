/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    const memo = new Array(n + 1).fill().map(e => [])
    memo[1] = [0, 1, 2, 3, 4, 5]

    const dfs = (n, l) => {
        if (memo[n][l]) return memo[n][l]
        let total = 0
        for (let i = 1; i <= l; i++) {
            total += dfs(n - 1, i)
        }
        memo[n][l] = total
        return total
    }
    return dfs(n, 5)
};





5, 5 + 4 + 3 + 2 + 1, 5 + 4 + 3 + 2 + 1 + 4 + 3 + 2 + 1 + 3 + 2 + 1 + 2 + 1 + 1

// At the next one would be 5+4+3+2+1
// 35
// math can be optimized but doing it manually at first