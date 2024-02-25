/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */                             // m   n
// (m+n)*nlog(n)
// {
// b:1
// a:2
// c:3
// }
var customSortString = function (order, s) {
    let orderMap = {}
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i
    };
    console.log(orderMap)
    return s.split("").sort((a, b) => {
        const alpha = orderMap[a] || -1
        const beta = orderMap[b] || -1
        return alpha - beta
    }).join("")
};