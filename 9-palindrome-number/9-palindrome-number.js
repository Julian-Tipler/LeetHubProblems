/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x
    //one digit number
    if(x<10 && x>=0) return true
    let reversed = 0
    while(original>0) {
        reversed = reversed*10 + original%10
        original = (original - original%10)/10
    }
    return reversed === x
};
