/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let curr = head
    let count = 0
    while (curr) {
        curr = curr.next
        count++
    }
    curr = head
    const dfs = (start, end) => {
        if (start > end) return null
        let mid = Math.floor((start + end) / 2)
        const left = dfs(start, mid - 1)
        const val = curr.val
        curr = curr.next
        const right = dfs(mid + 1, end)
        return new TreeNode(val, left, right)
    }
    return dfs(0, count - 1)
};

// 0
//     - 10     5
//         - 3     9
