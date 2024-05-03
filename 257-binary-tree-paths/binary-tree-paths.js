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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const output = []
    const recurse = (node, str = "") => {
        const newStr = str=== "" ? node.val.toString() : str + "->" + node.val
        if (!node.left && !node.right) {
            output.push(newStr)
            return
        }
        if (node.left) recurse(node.left, newStr)
        if (node.right) recurse(node.right, newStr)
    }
    recurse(root)
    return output
};

// in order traversal