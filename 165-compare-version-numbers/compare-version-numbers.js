/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {


    // create arrays out of the version strings
    // must split by periods and convert to integers
    // // may be some trickiness with leading zeroes
    const arrayOne = splitIntoArrayOfNums(version1)
    const arrayTwo = splitIntoArrayOfNums(version2)

    const longerLength = Math.max(arrayOne.length, arrayTwo.length)

    // loop through them both
    // even if one array loop ends, make sure to continue but treat the other as 0
    for (let i = 0; i < longerLength; i++) {
        const elOne = arrayOne[i] || 0
        const elTwo = arrayTwo[i] || 0
        console.log(elOne, elTwo)
        // if there is a difference, return -1 or 1
        if (elOne < elTwo) return -1
        else if (elOne > elTwo) return 1
    }


    return 0
};

const splitIntoArrayOfNums = (version) => {
    const periodSeparated = version.split(".") // ["1","2"]
    const integers = periodSeparated.map((el) => {
        return Number(el)
    })
    return integers
}

// Set up two arrays, one for each.
// iterate through them, comparing the values at each point
// if they are not equal, return -1 or 1
// else return 0