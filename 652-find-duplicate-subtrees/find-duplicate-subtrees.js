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
    // parse entire tree into an array arr. this will be done in a certain order that will cause there to be repeats of the values.
    // postorder?
    const set = {}
    const output = []
    // save string notation for each key of our current tree being built. If we run into the same tree twice return it
    // start string from scratch when you hit the bottom and add it to the set at each level
    const dfs = (node) => {
        if (!node) return "n"
        const leftString = dfs(node.left)
        const rightString = dfs(node.right)
        const currentString = leftString + "." + rightString + "." + node.val
        if (set[currentString] === 1) output.push(node)
        set[currentString] = set[currentString] ? set[currentString] + 1 : 1
        return currentString
    }
    dfs(root)
    return output
};