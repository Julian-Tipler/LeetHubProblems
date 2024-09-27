/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    const stepsArray = [-1, 1] // steps to reach each integer
    let fewestSteps = Infinity

    const dfs = (currNum, steps = 0) => {
        if (currNum === 1) {
            fewestSteps = Math.min(steps, fewestSteps)
            return
        }
        stepsArray[currNum] = steps
        if (steps > stepsArray[currNum]) return
        if (currNum % 2 === 0) {
            dfs(currNum / 2, steps + 1)
        } else {
            dfs(currNum + 1, steps + 1)
            dfs(currNum - 1, steps + 1)
        }
    }
    dfs(n)
    return fewestSteps
};