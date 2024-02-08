/**
 * @param {number} n
 * @return {number}
 */

// var numSquares = function (n) {
//     const memo = {}

//     const squares = []
//     let val = 1
//     while (val * val <= n) {
//         squares.push(val * val)
//         val++
//     }
//     let output = Number.MAX_VALUE
//     const dfs = (sum, index, count) => {
//         memo[squares[index] = Math.min(squares[index], count)]
//         if (sum > n) return false
//         if (sum === n) {
//             output = Math.min(count, output)
//             return true
//         }
//         for (let i = index; i >= 0; i--) {
//             dfs(sum + squares[i], i, count + 1)
//         }
//     }
//     dfs(0, squares.length - 1, 0)
//     return output
// };
var numSquares = function (n) {
    // returns the min number of squares to hit the sum
    let memo = {}
    const dfs = (sum) => {
        if (memo[sum]) return memo[sum]
        if (sum === 0) return 0
        if (sum < 0) return false
        let min = Number.MAX_VALUE
        for (let i = 1; i * i <= sum; i++) {
            let square = i * i;
            const count = dfs(sum - square) + 1
            min = Math.min(count, min)
        }
        memo[sum] = min
        return min
    }
    return dfs(n)
}


// naive solution
// dfs through with backtracking until many combinations of squares are tried

// maybe most efficient solution will use memoization?