/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let map = new Array(n + 1).fill(Number.MAX_VALUE)
    map[0] = 0
    // 1. Find closest square to current number
    // 2. For remainder, check its value in the map and add it.
    for (let i = 1; i <= n; i++) {
        // Iterate through squares
        for (let j = 0; Math.pow(2, j) <= i; j++) {
            // Find the remainder of the number minus the square
            const remainder = i - Math.pow(2, j)
            map[i] = map[remainder] + 1
        }
    }
    return map
};

0 // 0.     0
1 // 1.     1
10 // 2.    1
11 // 3.    2
100 // 4.   1
101 // 5.   2
110 // 6.   2
111 // 7.   3
1000 // 8.  1
1001 // 9.  2
1010 // 10. 2
1011 // 11. 3
1100 // 12. 2
1101 // 13. 3
1110 // 14  3
1111 // 15  4
10000 // 16