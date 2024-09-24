/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (childrenGreed, sortedCookies) {
    childrenGreed.sort((a, b) => b - a) // greatest to least
    sortedCookies.sort((a, b) => b - a) // greatest to least
    let kidsFed = 0

    // TODO keep track of cookie with largest value
    while (sortedCookies.length && childrenGreed.length) {
        // Gets rid of cookies that are too small

        while (sortedCookies.length && sortedCookies[sortedCookies.length - 1] < childrenGreed[childrenGreed.length - 1]) {
            sortedCookies.pop()
        }
        if (!sortedCookies.length) break
        kidsFed++
        childrenGreed.pop()
        sortedCookies.pop()
    }
    return kidsFed
};