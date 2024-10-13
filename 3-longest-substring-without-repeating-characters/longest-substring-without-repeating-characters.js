/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    const set = new Set()
    let l = 0
    let r = 0
    while (r < s.length) {
        const char = s[r]
        while (set.has(char)) {
            const oldChar = s[l]
            set.delete(oldChar)
            l++
        }
        set.add(char)
        maxLength = Math.max(maxLength, r - l + 1)
        r++
    }
    return maxLength
}