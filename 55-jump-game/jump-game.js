var canJump = function (nums) {
    const arr = new Array(nums.length-1).fill(1)
    const dfs = (index) => {
        if (arr[index] === 0) return false
        if (index === nums.length - 1) return true
        const maxSteps = nums[index]
        for (let i = 1; i <= maxSteps; i++) {
            let nextPosition = dfs(index + i)
            if (!!nextPosition) return true
        }
        arr[index] = 0
        return false
    }
    return dfs(0)
};

// doesn't matter what jump length last index is
// naive solution:
// starting at the first index, dfs() in a for loop for the number of steps.
// If the last index is reached eventually return true