/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const visitCounts = {}
    let l = 0
    let r = 0
    let maxCount = 0

    while (r < s.length) {
        let curr = s[r]
        visitCounts[curr] = visitCounts[curr] ? visitCounts[curr] + 1 : 1
        if (visitCounts[curr] > maxCount) {
            maxCount = visitCounts[curr]
        }
        const length = r - l + 1
        if (length - maxCount > k) {
            visitCounts[s[l]]--
            l++
        }
        r++
    }
    return r-l
};

// bbacaca


function getMaxCountLetters(count) {
    // Initialize maxCount to track the highest count found.
    let maxCount = 0;
    // Initialize an array to hold letters with the maximum count.
    const maxCountLetters = [];

    // Iterate over the object to find the maximum count value.
    Object.entries(count).forEach(([letter, count]) => {
        if (count > maxCount) {
            maxCount = count;
            // Reset maxCountLetters with the current letter as the previous max is surpassed.
            maxCountLetters.length = 0;
            maxCountLetters.push(letter);
        } else if (count === maxCount) {
            // If the current count matches the maxCount, add the letter to the array.
            maxCountLetters.push(letter);
        }
    });

    return maxCountLetters;
}