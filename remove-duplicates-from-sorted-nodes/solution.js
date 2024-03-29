var deleteDuplicates = function (head) {
  // Special case...
  if (head == null || head.next == null) return head;
  // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head......
  var fake = new ListNode(0);
  fake.next = head;
  var curr = fake;
  // Loop till curr.next and curr.next.next not null
  while (curr.next != null && curr.next.next != null) {

    // curr.next means the next node of curr pointer and curr.next.next means the next of next of curr pointer...
    // if the value of curr.next and curr.next.next is same...
    // There is a duplicate value present in the list...
    debugger
    if (curr.next.val == curr.next.next.val) {
      let duplicate = curr.next.val;
      // If the next node of curr is not null and its value is eual to the duplicate value...
      while (curr.next != null && curr.next.val == duplicate) {
        // Skip those element and keep updating curr...
        curr.next = curr.next.next;
      }
    }
    // Otherwise, move curr forward...
    else {
      curr = curr.next;
    }
  }
  return fake.next; // Return the linked list...
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let arr = [1, 2, 3, 3, 4, 5, 6];

const createNodeList = (arr) => {
  let preNode = new ListNode(null, null);
  let curr = preNode;
  while (arr.length) {
    curr.next = new ListNode(arr.shift(), null);
    curr = curr.next;
  }
  return preNode.next;
};

const list = createNodeList(arr);

console.log(deleteDuplicates(list));
