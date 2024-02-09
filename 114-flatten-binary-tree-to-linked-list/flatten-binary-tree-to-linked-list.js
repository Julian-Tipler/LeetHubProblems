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
 * @return {void} Do not return anything, modify root in-place instead.
 */



var flatten = function (root) {
    let prev = null
    const dfs = (node) => {
        if (!node) return null
        // reverse pre order traversal
        // each dfs ensures that that side of the tree is now flattened
        dfs(node.right)
        dfs(node.left)
        // action
        node.left = null
        node.right = prev
        prev = node
    }
    dfs(root)
    return root
};
