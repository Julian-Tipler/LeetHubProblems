/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let hit = null;

  while (right >= left) {
    let mid = Math.floor((right + left) / 2);
    console.log(mid);
    if (nums[mid] === target) {
      hit = mid;
      break;
    }
    if (nums[mid] > target) right = mid - 1;
    if (nums[mid] < target) left = mid + 1;
  }
  if (hit === null) return [-1, -1];

  let run = true;
  let l = hit;
  let r = hit;

  while (run === true) {
    run = false;
    if (nums[r + 1] === target) {
      r++;
      run = true;
    }
    if (nums[l - 1] === target) {
      l--;
      run = true;
    }
  }
  return [l, r];
};
