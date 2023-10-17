/* Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // To find out the diameter of the binary tree, find its left height
    // and right height and add them.
    // The max height received in this way would be the diameter of the tree
    if(root === null) {
        return 0
    }
    // JS doesn't have the concept of pointers
    // Share an array to store the diameter between runs
    let diameter = [0];
    calculateHeight(root, diameter)
    return diameter[0];
};

var calculateHeight = function(root, diameter) {
    if(root === null) {
        return 0
    }
    let leftHeight = calculateHeight(root.left, diameter);
    let rightHeight = calculateHeight(root.right, diameter);
    let height = Math.max(leftHeight, rightHeight);
    diameter[0] = Math.max(diameter[0], leftHeight + rightHeight)
    return 1 + height;
}