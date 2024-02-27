/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []
    let q = [root]
    let output = []

    while (q.length) {
        let quantity = q.length
        let level = []
        while (quantity) {
            let curr = q.shift()
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            level.push(curr.val)
            quantity--
        }
        output.push(level)
    }
    return output.reverse()

};