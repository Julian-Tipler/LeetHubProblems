/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let count = 0

    let champ = 0
    const map = { 0: -1 }
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 1 ? count++ : count--
        if (count in map) {  // if the count has already been hit
            if (i - map[count] > champ) {
                champ = i - map[count]
            }
        } else {  // if this is the first time this count has been hit
            map[count] = i
        }
    }
    return champ
};