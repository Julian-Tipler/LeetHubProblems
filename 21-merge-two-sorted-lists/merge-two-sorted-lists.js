/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // set head equal to the lesser of list1 and list2
    if (!list1) return list2
    if (!list2) return list1

    let main
    let side
    let head
    if (list1.val <= list2.val) {
        main = list1
        side = list2
        head = list1
    } else {
        main = list2
        side = list1
        head = list2
    }

    while (main) {
        // if we have inserted all list two, go to the end of main
        if (!side) {
            main = main.next
        }
        // side is between main and main.next
        else if (main.next && main.next.val <= side.val) {
            main = main.next
        } else {
            const temp = side.next
            side.next = main.next
            main.next = side
            main = main.next
            side = temp
        }
    }
    return head
};