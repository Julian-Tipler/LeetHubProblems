/**
 * @param {string[]} strs
 * @return {string}
 */

const lettersInCommon = (current,b) => {
    for(let i = 0;i<current.length;i++){
        if(current[i] !== b[i]) {
            return current.slice(0,i)
        }
    }
    return current
}

var longestCommonPrefix = function(strs) {
    let current = strs[0];
    for(let i = 1;i<strs.length;i++) {
        current = lettersInCommon(current,strs[i])
    }
    return current
};