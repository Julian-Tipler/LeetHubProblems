/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    let output = 0
    const sortedWords = words.sort((a, b) => a.length - b.length)
    const wordMap = {}

    sortedWords.forEach(word => {
        let maxChain = 1
        for (let l = 0; l < word.length; l++) {
            let prevWord = word.slice(0, l) + word.slice(l + 1, word.length)
            if (wordMap[prevWord]) {

                maxChain = Math.max(maxChain, wordMap[prevWord] + 1)
            }
        }
        wordMap[word] = maxChain
        output = Math.max(output, maxChain)
    })
    return output

    // 
};