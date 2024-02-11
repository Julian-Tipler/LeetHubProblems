var canJump = function (nums) {
    let maxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) return false
        let steps = nums[i]

        maxIndex = Math.max(i + steps, maxIndex)
    }
    return true
};

// doesn't matter what jump length last index is
// naive solution:
// starting at the first index, dfs() in a for loop for the number of steps.
// If the last index is reached eventually return true