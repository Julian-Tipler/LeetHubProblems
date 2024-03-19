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
# @return {Integer}
def max_depth(root)
    if(!root) 
        return 0
    end
    @max = 1
    dfs(root,1)
    return @max
end

def dfs(node,depth)
    if(!node) 
        return
    end
    @max = [@max,depth].max
    dfs(node.left,depth+1)
    dfs(node.right,depth+1)
end