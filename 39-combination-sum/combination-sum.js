/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// space optimize with pointers?
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => b - a) //greatest to least

    const output = []
    const dfs = (currArray, remaining, index) => {
        if (remaining === 0) {
            output.push([...currArray])
        }
        if (remaining < 0) return
        for (let i = index; i < candidates.length; i++) {
            dfs([...currArray, candidates[i]], remaining - candidates[i], i)
        }
    }
    dfs([], target, 0)
    return output
};

// [1,2,3]
// 

// Candidates are the possible numbers you can add together.
// Target number (probably the basecase) is the number you need to sum the candidates up to.