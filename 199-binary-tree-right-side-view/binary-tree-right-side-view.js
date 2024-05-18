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
 * @return {number[]}
 */
var rightSideView = function (root) {
    const output = []
    let levelReached = 0
    const dfs = (node, currentLevel) => {
        if (!node) return
        if (currentLevel > levelReached) {
            levelReached = currentLevel
            output.push(node.val)
        }
        dfs(node.right, currentLevel + 1)
        dfs(node.left, currentLevel + 1)

    }
    dfs(root, 1)
    return output
};

// DFS. Should start on right side. So call DFS(node.right)
// Keep track of what level we have reached
// If it is the next level and on the right add it