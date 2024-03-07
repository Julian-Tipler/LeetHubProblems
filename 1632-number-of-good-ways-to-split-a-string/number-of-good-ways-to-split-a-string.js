/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
    let goodSplits = 0
    let leftMap = new Map()
    let rightMap = new Map()

    leftMap.set(s[0], 1)
    let i = 1
    while (i < s.length) {
        let curr = rightMap.get(s[i])
        rightMap.set(s[i], curr ? curr + 1 : 1)
        i++
    }

    i = 1
    while (i < s.length) {
        if (leftMap.size === rightMap.size) {
            goodSplits++
        }
        leftMap.set(s[i], 1)
        if (rightMap.get(s[i]) === 1) {
            rightMap.delete(s[i])
        }
        else rightMap.set(s[i], rightMap.get(s[i]) - 1)
        i++
    }
    return goodSplits
};
