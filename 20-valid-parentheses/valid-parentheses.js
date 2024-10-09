/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const topParentheses = stack[stack.length - 1]
        const currParentheses = s[i]

        if (!!pairs[currParentheses]) {
            stack.push(currParentheses)
        } else if (currParentheses === pairs[topParentheses]) {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length) return false
    return true
};

// if a close bracket comes before its corresponding opening bracket return false
// if reach the end and open bracket hasn't found its close bracket return false
// use a stack