/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.) */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Have a prefix multiple and a postfix multiple and multiply these values to get the value
    // We can use 2 arrays to store the prefix and the postfix multiples, but we can optimize this further
    // we can store the prefix multiple in the array itself in the same position as the element
    // while calculating the postfix, rather than storing it in a new array, we can multiply it with prefix value stored in result array and return it

    let prefix = 1;
    let result = [];
    for(let i=0; i<nums.length; i++) {
        result[i] = prefix;
        prefix = prefix*nums[i];
    }

    let postfix = 1;
    for(let i=nums.length-1; i>=0; i--) {
        result[i] = result[i]*postfix;
        if(result[i] === -0) {
            result[i] = 0;
        }
        postfix = postfix*nums[i];
    }
    return result;
};
console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))