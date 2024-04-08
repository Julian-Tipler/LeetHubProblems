/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const map = new Map()
    let output = 0
    // create a count map
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ? map.get(nums[i]) + 1 : 1))
    }

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        const count = map.get(key)
        const target = k - nums[i]
        if (count <= 0) continue
        else if (target === key && count >= 2) {
            map.set(key, count - 2)
            output++
        }
        else if (key !== target && map.get(target) && map.get(target) >= 1) {
            console.log("they should land here", key, count, target)
            map.set(key, count - 1)
            map.set(target, map.get(target) - 1)
            output++
        }
    }
    return output
};