/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            let pointerS = i
            let pointerT = j
            let diff = 0
            while (s[pointerS] && t[pointerT]) {
                console.log(pointerS,pointerT)
                // if two or more diffs stop the loop
                // If the pointers are not equal add one diff
                if (s[pointerS] != t[pointerT]) {
                    diff++
                }
                if (diff > 1) {
                    break
                }
                // only increase count if there is exactly one diff
                if (diff === 1) {
                    console.log("count")
                    count++
                }
                pointerS++
                pointerT++
            }
        }
    }
    return count
};



// super naive solution
// find every possible substring of both. for each in s check against each in t
// have a helper function "differ by one"
//  helper function compares each letter one by one and makes sure there is only one difference between them (if count === 1) outputCount++

// less naive solution
// two pointers.
// iterate through both words (nested for loop)
// if the pointer at one != the pointer at the other
//  iterate left and right outward from that point (in both words) until they differ in another letter (in addition to the starting letter)
//  
// 
// dfs for loop
// aeiou




// aeyou