/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target)=> {
    let output = []
    let map = new Map()
    for(let i = 0;i<nums.length;i++) {
        if(map.has(target-nums[i])) {
            output.push(map.get(target-nums[i]))
            output.push(i)
        }
        else{
            map.set(nums[i],i)
        }
    }
    return output
};