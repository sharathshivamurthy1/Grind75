/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Edge cases
    if(list1 === null) {
        return list2;
    }
    if(list2 === null) {
        return list1;
    }

    // Create one node to point to final result
    let result = null;

    // Assign list1 as the smaller node among the 2 and swap if necessary
    if(list1.val <= list2.val) {
        
    } else {
        let tmp = list1;
        list1 = list2;
        list2 = tmp;
    }
    result = list1;

    // Main logic
    let temp = null;
    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            temp = list1;
            list1 = list1.next
        } else {
            temp.next = list2
            
            let tmp = list1;
            list1 = list2;
            list2 = tmp;
            
            temp = null;
        }
    }
    if(list1 === null) {
        temp.next = list2
    }
    return result;
};