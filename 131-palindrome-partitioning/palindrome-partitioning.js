/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // for loop and run isPalindrome once for each letter
    function recurse(str) {
        if (str.length === 1) return [[str]]
        if (str.length === 0) return [[]]
        // split s into each possible part  a,bba   ab,ba   abb,a
        const newCombinations = []
        for (let i = 1; i <= str.length; i++) {
            const firstHalf = str.substring(0, i)
            const secondHalf = str.substring(i, str.length)
            if (isPalindrome(firstHalf)) {
                const secondHalfCombinations = recurse(secondHalf)
                secondHalfCombinations.forEach((secondHalfCombination) => {
                    newCombinations.push([firstHalf, ...secondHalfCombination])
                })
            }
        }

        return newCombinations
    }
    return recurse(s)
};

// a ab
// aa b


function isPalindrome(str) {
    if (str === str.split("").reverse().join("")) return true
    return false
}
// DFS
// make helper function "is palindrome"

// Two Pointer?