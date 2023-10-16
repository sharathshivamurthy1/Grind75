/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
  */

/* 

Have a map of the following format:
{
    elem : index
}
Here, we check if the element is available in the map before adding it

In example 1 - 9-2=7. So store 2:0 as the 1st entry
Then when we encounter 7, calculate the diff - 9-7=2
2 is already present in the map.
So get the index of 7 which is the current index AND get the index of 2 from the map and return these

*/

function getIndices(inputArr, targetSum) {
    let hashMap = {}
    let indices;
    inputArr.forEach((num, index) => {
        let diff = targetSum - num;
        if(diff in hashMap) {
            indices = [index, hashMap[diff]]
        } else {
            hashMap[num] = index
        }
    })
    return indices;
}
console.log(getIndices([2,7,11,15], 9))