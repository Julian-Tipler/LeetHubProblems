/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.current = nums;
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.current = [...this.original]
    return this.current
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = 0;i<this.current.length;i++) {
        let randomNum = Math.floor(Math.random()*this.current.length)
        let temp = this.current[i]
        this.current[i] = this.current[randomNum]
        this.current[randomNum] = temp
    }
    return this.current
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */