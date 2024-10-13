/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        const set = new Set()
        for (let j = i; j < s.length; j++) {
            const char = s[j]
            if (set.has(char)) {
                break
            }
            set.add(char)
            const length = j - i + 1
            maxLength = Math.max(maxLength, length)
        }
    };
    return maxLength
}