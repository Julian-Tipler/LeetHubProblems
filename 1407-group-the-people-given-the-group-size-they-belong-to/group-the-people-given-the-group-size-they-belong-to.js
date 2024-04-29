/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const map = {}
    const output = []
    for (let iD = 0; iD < groupSizes.length; iD++) {
        const key = groupSizes[iD]
        if (map[key]) {
            map[key].push(iD)
        } else {
            map[key] = [iD]
        }
    }
    Object.keys(map).forEach((key) => {
        const value = map[key]
        let group = []
        while (value.length) {
            group.push(value.pop())
            if (group.length === parseInt(key)) {
                output.push([...group])
                group = []
            }
        }
    })
    return output
};

// 4 people in a group of 4
// {3:[0,1,2,3,4,6],1:[5]}
// create map of groups
// for each entry, do a while loop for the number itself and group into new arrays