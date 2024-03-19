# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    hash = {}
    (0...nums.length).each do |i|
        num = nums[i]
        hash[num] = hash[num] ? hash[num] + 1 : 1
    end
    majority = (nums.length/2).floor
    puts hash
    hash.each_key do |key|
        if hash[key] > majority
            return key
        end
    end
end