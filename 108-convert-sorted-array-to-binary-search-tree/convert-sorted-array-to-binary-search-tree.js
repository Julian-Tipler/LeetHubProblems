/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//[1,2,3,4,5,6,7]
var sortedArrayToBST = function (nums) {
    const dfs = (start, end) => {
        if (end === start) return new TreeNode(nums[start], null, null)
        if (end < start) return null
        const mid = Math.floor((end + start) / 2)
        const left = dfs(start, mid - 1)
        const right = dfs(mid + 1, end)
        return new TreeNode(nums[mid], left, right)
    }
    return dfs(0, nums.length - 1)
};