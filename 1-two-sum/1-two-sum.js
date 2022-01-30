/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target)=> {
    let output = []
    let map = new Map()
    for(let i = 0;i<nums.length;i++) {
        let num = nums[i]
        let counterpart = target-num
        if(map.has(counterpart)) {
            output.push(map.get(counterpart),i)
        }
        else {
            map.set(num,i)
        }
    }
    return output
};