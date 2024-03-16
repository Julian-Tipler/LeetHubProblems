/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let count = 0

    let champ = 0
    let map = {0:0}
    for (let i = 0; i <= nums.length; i++) {

        // if the count has already been hit
        if (count in map) {
            if (i - map[count] > champ) {
                champ = i - map[count]
            }
        }
        // if this is the first time this count has been hit
        else {
            map[count] = i
        }
        nums[i] === 1 ? count++ : count--
    }
    return champ
};