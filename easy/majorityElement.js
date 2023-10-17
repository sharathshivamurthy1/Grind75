/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space? */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // This is Moore's voting algorithm
    // We can solve this using hashMap, but it would take O(n) space
    // Hence, to to optimize this, we use Moore's voting algorithm
    // Split the array into multiple parts where each part has equal majority and minority elements 
    // Keep a count and a candidate element
    let count = 0;
    let candidate = 0;
    for(let i=0; i<nums.length; i++) {
        if(count === 0) {
            candidate = nums[i]
        }
        if(nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))