/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let pointerA = 0;
    let pointerB = height.length-1
    let maxHeight = 0
    
    while(pointerA<pointerB) {
        maxHeight = Math.max(maxHeight,(pointerB-pointerA)*(Math.min(height[pointerA],height[pointerB])))
        if(height[pointerA]<height[pointerB]) {
            pointerA++
        } else {
            pointerB--
        }
    }
    return maxHeight
};
