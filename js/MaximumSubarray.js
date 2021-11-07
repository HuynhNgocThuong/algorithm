/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (const value of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += value;
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
