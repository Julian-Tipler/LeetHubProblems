var canJump = function (nums) {
    let maxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) return false
        if (i + nums[i] > maxIndex) maxIndex = i + nums[i]
    }
    return true
};