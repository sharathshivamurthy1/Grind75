/* Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // This uses Kadene's algorithm
    // Keep adding the sum of the array elements and set it to 0 when it goes below 0;
    // To get the subarray - maintain start and end indices
    // set start when sum is 0
    // when max sum is being set, set the end index
    let sum = 0;
    let maxSum = 0;
    nums.forEach((value, index) => {
        sum+=value;
        // the max sum needs to be computed before assigning sum to 0 since leetcode takes [-1] as -1 for an answer
        maxSum = Math.max(sum, maxSum);
        if(sum < 0) {
            sum = 0;
        }
    })
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-1, -2]))
console.log(maxSubArray([5,4,-1,7,8]))