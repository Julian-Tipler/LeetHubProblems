/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const numeralDictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const specialSituations = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let total = 0

    let i = 0


    while (i < s.length) {
        const curr = s[i]
        const next = s[i + 1]
        if (numeralDictionary[curr] < numeralDictionary[next]) {
            total += specialSituations[curr + next]
            i += 2
        } else {
            total += numeralDictionary[curr]
            i++
        }
        // if curr is greater than next add curr
        //  if curr symbol < next symbol we have a special situation
        //
    }


    return total
    // progress until you reach a lesser value than current max
};



// MCMXCIV