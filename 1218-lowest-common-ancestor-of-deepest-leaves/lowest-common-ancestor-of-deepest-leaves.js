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
var lcaDeepestLeaves = function (root) {
    let maxDepth = 0
    let output = root
    const dfs = (node, depth) => {
        if (!node) return null
        const depthLeft = node.left && dfs(node.left, depth + 1)
        const depthRight = node.right && dfs(node.right, depth + 1)

        const nodeMaxDepth = Math.max(depthLeft, depthRight, depth)
        if (depthLeft === depthRight) {
            if (nodeMaxDepth >= maxDepth) {
                maxDepth = nodeMaxDepth
                output = node
            }
        }
        return nodeMaxDepth
    }
    dfs(root, 0)
    return output
};