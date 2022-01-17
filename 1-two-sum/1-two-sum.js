/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target)=> {
    let map = new Map()
    for(let i = 0;i<nums.length;i++) {
        let num = nums[i]
        if(map.has(target-num)) {
            return [i,map.get(target-num)]
        }
        else map.set(num,i)
    }
};