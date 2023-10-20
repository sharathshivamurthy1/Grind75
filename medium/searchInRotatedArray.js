/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /*  Get the mid point of array 
        Check if left half is sorted or the right half is sorted
        Check if element lies in the sorted half
        Eliminate whichever half the element does not lie in
    */
   let left = 0;
   let right = nums.length - 1
   let mid;
   while(left <= right) {
    mid = Math.floor((left+right)/2);
    if(nums[mid] === target) {
        return mid;
    } else if(nums[left] === target) {
        return left;
    } else if(nums[right] === target) {
        return right;
    }

    // Check if left of the array is sorted
    if(nums[left] <= nums[mid]) {
        // Check if target lies between left and mid
        if(nums[left] <= target && target < nums[mid]) {
            // target lies in the sorted part - move window to the left half
            right = mid-1;
        } else {
            left = mid+1;
        }
    } else {
        if(nums[mid] < target && target <= nums[right]) {
            // right half is sorted and target lies in right half.
            left=mid+1;
        } else {
            right=mid-1;
        }
    }
   }
   return -1;
};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))