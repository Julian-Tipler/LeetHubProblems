/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const storageObject = {}
    for (let i = 0; i < strs.length; i++) {
        let sortedNum = strs[i].split("").sort().join("")
        if (!storageObject[sortedNum]) storageObject[sortedNum] = []
        storageObject[sortedNum].push(strs[i])
    }
    return Object.values(storageObject)
}

// Naive solution. Nested for loops. Check each item against each other item
// after that loop, push to an array
// Anagram means they share the same letters