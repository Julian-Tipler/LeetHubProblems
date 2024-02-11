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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let arr = []
    const prev = null
    const dfs = (node) => {
        if (!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)

    const makeNode = (start, end) => {
        if (start > end) return null
        const mid = Math.floor((end + start) / 2)

        const left = makeNode(start, mid - 1)
        const right = makeNode(mid + 1, end)
        return new TreeNode(arr[mid], left, right)
    }
    return makeNode(0, arr.length - 1)
};