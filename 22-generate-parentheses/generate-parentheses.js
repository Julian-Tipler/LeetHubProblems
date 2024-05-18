/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const output = []
    const recurse = (open, closed, str) => {
        if (closed > open || closed + open > 2 * n) return
        if (open === n && open === closed) output.push(str)
        recurse(open + 1, closed, str + "(")
        recurse(open, closed + 1, str + ")")
    }
    recurse(0, 0, "")
    return output
    // check we don't have too many lefts or rights
};

// n open parentheses, n closed parentheses
// Return an array of all possibilities
// Stack?
// n*2 total parentheses
// have to start with an open parenthese
// can never have more closed than open
// Will always be valid as long as open >= closed and open+closed>=n


