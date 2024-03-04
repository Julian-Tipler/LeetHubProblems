/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    let sortedTokens = tokens.sort((a, b) => a - b)
    // If can play a token with power play the lowest
    // If can't, charge with the largest
    let score = 0

    let start = 0
    let end = tokens.length - 1
    let max = 0

    while (start <= end) {
        console.log(score, start, end)
        // If you can play a token face up, do it
        if (sortedTokens[start] <= power) {
            power -= sortedTokens[start]
            score++
            max = Math.max(max, score)
            start++
        }
        // If you have at least one point and can't play a token, play the largest point value one
        else if (score > 0) {
            power += sortedTokens[end]
            score--
            end--
        } else {
            break
        }
    }
    return max
};
// play 