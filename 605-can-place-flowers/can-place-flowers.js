/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    for (let i = 0; i < flowerbed.length; i++) {
        const prev = flowerbed[i - 1] === undefined ? 0 : flowerbed[i - 1]
        const next = flowerbed[i + 1] === undefined ? 0 : flowerbed[i + 1]
        if (prev === 0 && next === 0 && flowerbed[i] === 0) {
            i++
            n--
        }
    }
    return n <= 0
}

