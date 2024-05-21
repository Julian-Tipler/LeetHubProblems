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
 * @return {string}
 */
var tree2str = function (root) {
    const dfs = (node) => {
        // base case
        if (node === null) {
            return ""
        }
        // handle current node
        let left = dfs(node.left)
        let right = dfs(node.right)

        // left and right are null

        // left is null and right is not
        if (left === "" && right !== "") {
            left = "()"
            right = `(${right})`
        }
        // left not null right is null
        else if (left !== "" && right === "") {
            left = `(${left})`
        }
        // both are not null
        else if (left !== "" && right != "") {
            left = `(${left})`
            right = `(${right})`
        }

        // construct string from left and right inside parentheses
        return `${node.val}${left}${right}`
    }
    return dfs(root)
};

// Children inside parentheses 1(2)(3)
// Need to ommit empty parentheses (both are null, or left but no right child)
// Right but no left, need the empty parentheses still.
// Preorder: 
// handle current node
// dfs(left)
// dfs(right)

// Potentially can parse string at the end to remove parentheses
// Potentially can handle this in the dfs function

// 