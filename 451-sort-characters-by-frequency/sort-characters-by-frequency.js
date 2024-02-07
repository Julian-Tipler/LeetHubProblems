/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }
    let arr = Object.keys(map).sort((a, b) => map[b] - map[a])
    let output = ""
    arr.forEach(letter => {
        let count = map[letter]
        while (count > 0) {
            output += letter
            count--
        }
    })
    return output
};