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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let left = root
    let maxHeight = 0
    const dfs = (node, height) => {
        if (!node) return
        console.log(node,height)
        if (height > maxHeight) {
            left = node
            maxHeight= height
        }
        dfs(node.left, height + 1)
        dfs(node.right, height + 1)
    }
    dfs(root, 0)

    return left.val
};