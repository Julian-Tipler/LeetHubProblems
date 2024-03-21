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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const set = {}
    const output = []
    const dfs = (node) => {
        if (!node) return "n"
        const left = dfs(node.left)
        const right = dfs(node.right)
        const nodeString = left + "-" + right + "-" + node.val
        if (set[nodeString] === true) {
            output.push(node)
            set[nodeString] = false
        }
        else if (!(nodeString in set)) {
            set[nodeString] = true
        }
        return nodeString
    }
    dfs(root)
    return output
};
