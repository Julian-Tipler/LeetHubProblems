/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strNum = x.toString()
    console.log(strNum.split(""))
    if(strNum.split("").reverse().join("") === strNum) return true
    return false
};