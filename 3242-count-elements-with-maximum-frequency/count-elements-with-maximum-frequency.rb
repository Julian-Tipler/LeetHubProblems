# @param {Integer[]} nums
# @return {Integer}
def max_frequency_elements(nums)
    count_hash = {}
    max_count = 0
    nums.each do |num|
        count_hash[num] = count_hash[num] ? count_hash[num]+=1 : 1
        if count_hash[num]>max_count
            max_count = count_hash[num]
        end
    end

    total = 0
    count_hash.each_key do |key|
        if count_hash[key] == max_count
           total += count_hash[key]
        end
    end
    return total
end