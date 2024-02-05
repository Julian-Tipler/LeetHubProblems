/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const dict = {}
    for (let i = 0; i < s.length; i++) {
        dict[s[i]] !== undefined ? dict[s[i]] = -1 : dict[s[i]] = i
    }
    console.log(dict)
    let index = Number.MAX_VALUE
    Object.keys(dict).forEach((key) => {
        if (dict[key] !== -1) {
            index = Math.min(index, dict[key])
        }
    })
    return index === Number.MAX_VALUE ? -1 : index
};