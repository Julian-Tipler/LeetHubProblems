/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    console.log("HEAD", head)
    const dfs = (node) => {
        const head = node
        while (node) {
            // start recursive path
            if (node.child) {
                let next = node.next // 2
                const child = dfs(node.child)
                // set node.next to the child node and set the child node.prev to current node
                node.next = child
                child.prev = node
                node.child = null
                last = findLast(node.next)
                last.next = next
                if (next) next.prev = last
            }
            node = node.next
        }
        return head
    }
    dfs(head)
    let test = head
    while (test) {
        // console.log(test)
        test = test.next
    }
    return head
};

const findLast = (node) => {
    if (!node) return null
    while (node.next) {
        node = node.next
    }
    return node
}

// (while) iterate until we hit a child
// (if) !!node.child
    // let next = node.next 2
    // node.next = dfs(node.child)
    // last = findLast(node.next)
    // last.next = next
    // next.prev = last
// base case will be node.next = null
// return node
// findLast
    // while (node.next) node = node.next