var addTwoNumbers = function(l1, l2) {
    const reverseL1 = reverseLinkedList(l1);
    const reverseL2 = reverseLinkedList(l2);
    
    const strValReverseL1 = getStrVal(reverseL1);
    const strValReverseL2 = getStrVal(reverseL2);
    
    // support any number even past 2^53. Type coercion back to string for iteration
    const strValReverseSum = BigInt(strValReverseL1) + BigInt(strValReverseL2) + "";

    // loop through sum and create new reversed linked list instance with integer nodes
    let res;
    for (let i = 0; i < strValReverseSum.length; i++) {
        const nextVal = BigInt(strValReverseSum[i]);
        res = insertNodeAtTail(res, nextVal);
    }
    
	// to get desired solution
    return reverseLinkedList(res);
};

// same as https://leetcode.com/problems/reverse-linked-list/
function reverseLinkedList(head) {
    let previous = null;
    let current = head;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

function getStrVal(head) {
    let strVal = "";
    while (head !== null) {
        strVal += head.val;
        head = head.next;
    }
    return strVal;
}

function insertNodeAtTail(head, nextVal) {
    let newNode = new ListNode(nextVal)
    if (!head) {
        head = newNode;
        return head;
    }
    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}