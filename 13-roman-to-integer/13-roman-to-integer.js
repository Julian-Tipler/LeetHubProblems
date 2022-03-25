/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let sum = 0
    
    for(let i = 0;i<s.length;i++) {
        
        const num = s[i]
        const nextNum = s[i+1]
        if(value[num]<value[nextNum] && nextNum !== undefined) {
            //special situation
            let dualValue = value[nextNum]-value[num]
            sum += dualValue
            //increment i by extra to account for both numerals
            i++
        }
        else {
            sum += value[num]
        }
    }
    return sum
};


