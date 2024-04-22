/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums, l = 0, r = (nums.length - 1)) {
    if (l === r) return l
    const center = Math.floor((r + l) / 2)
    if (isPeak(nums[center - 1], nums[center], nums[center + 1])) return center
    else if (nums[center - 1] > nums[center]) {
        return findPeakElement(nums, l, center - 1)
    } else if (nums[center] < nums[center + 1]) {
        return findPeakElement(nums, center + 1, r)
    }
};


const isPeak = (leftVal = -Infinity, centerVal, rightVal = -Infinity) => {
    return leftVal < centerVal && centerVal > rightVal
}

// binary search?
// maybe check if target value (middle value) is a peak (check that t is greater than t-1 and greater than t+1)
// edges can be peaks: [3,2,1] (left peak) [1,2,3] (right peak)

// if not is peak, go towards the higher value's direction.

// What if valley? [3,2,3] Maybe go either direction?
[1, 2, 1, 3, 4, 5, 6]