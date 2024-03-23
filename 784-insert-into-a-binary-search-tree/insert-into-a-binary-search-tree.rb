# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer} val
# @return {TreeNode}


def insert_into_bst(node, val)
    if !node 
        return TreeNode.new(val,nil,nil)
    end
    # traverse left or right depending on if val is greater or less than the next nodes
    # If val is between node.left and node.right create new node with left and right of node.left and node.right
    if val < node.val 
        node.left = insert_into_bst(node.left,val)
    elsif node.val < val 
        node.right = insert_into_bst(node.right,val)
    end
    node
end