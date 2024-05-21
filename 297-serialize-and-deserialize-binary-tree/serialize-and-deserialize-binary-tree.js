/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const output = []
    const dfs = (node) => {
        //base case
        if (node === null) {
            output.push(null)
            return
        }
        //preorder
        output.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)

    return output
};

// [1, 2, null, null, 3, 4, null, null, 5, null, null]
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// [1,null,null]
// node = arr.shift()
// This will shift values from the array leaving only the right tree
// node.left = dfs()
// By the time we hit the right tree we will only have the right tree values remaining
// node.right = dfs()
// would it be more effiecient to sort and use pop()?

var deserialize = function (data) {
    const reversed = data.reverse()

    const dfs = (value) => {
        if (value === null) {
            return null
        }
        const left = dfs(reversed.pop())
        const right = dfs(reversed.pop())
        return new TreeNode(value, left, right)
    }
    return dfs(reversed.pop())
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */