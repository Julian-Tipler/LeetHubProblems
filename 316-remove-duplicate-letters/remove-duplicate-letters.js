/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const stack = [] // keeps track of our forming string
    const addedToStack = new Set() // track if added to stack
    const lastOccurrence = {}
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        lastOccurrence[letter] = i
    }

    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        if (!addedToStack.has(letter)) {
            while (stack[stack.length - 1] > letter && lastOccurrence[stack[stack.length - 1]] > i) {
                addedToStack.delete(stack[stack.length - 1])
                stack.pop()
            }
            stack.push(letter)
            addedToStack.add(letter)
        }
    }
    return stack.join("")
};





// same order but with removed letters
// can loop through once and grab all letters that need to be included by saving a map with letter and quantity
// lexicographically small: smaller letters first
// want to keep letters at end of alphabet near end of word
// want to keep letters at beginning of alphabet near beginning of word

// dad // for worse letters we want to remove them from the beginning
// ada // for better letter we want to remove them from the end

// aca   // best ad


// keep track of latest index for each letter (so if you run into a "z" you know you can remove it now because there is a later one)
// for each letter, if it is the best letter, or it is your last chance to keep it, keep it. so keep track of current "best" letter

// dca