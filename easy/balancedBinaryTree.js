/* Given a binary tree, determine if it is 
height-balanced
.Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104 */

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return depthOfTree(root) > -1
};

let depthOfTree = function(root) {
    if(root === null) {
        return 0;
    }
    let leftHeight = depthOfTree(root.left)
    if(leftHeight === -1) {
        return -1
    }
    let rightHeight = depthOfTree(root.right)
    if(rightHeight === -1) {
        return -1
    }
    if(Math.abs(leftHeight - rightHeight) > 1) {
        return -1
    }
    return (Math.max(leftHeight, rightHeight) + 1);
}