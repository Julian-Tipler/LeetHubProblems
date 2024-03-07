/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    const output = [[1], [1, 1]]
    for (let r = 3; r <= numRows; r++) {
        let prev = output[r - 2]
        let arr = []
        arr.push(1)
        for (let i = 1; i < r - 1; i++) {
            arr.push(prev[i - 1] + prev[i])
        }
        arr.push(1)
        output.push(arr)
    }
    return output
};