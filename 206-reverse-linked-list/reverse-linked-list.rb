# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    if !head
        return nil
    end
    last_node = recurse(head)
    last_node.next = nil
    return @new_head
    
end

def recurse(node) 
    if node.next == nil 
    @new_head = node
        return node
    end
    prevNode = recurse(node.next)
    prevNode.next = node
    node
end