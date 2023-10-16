/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Check for even length. Odd length can never be matched
    if(s.length % 2 !== 0) {
        return false;
    }

    let openingParantheses = new Set(['(', '[', '{'])
    let closingParantheses = new Set([')', ']', '}'])
    let paranthesesMatchingMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let stack = [];
    for(let i=0; i<s.length; i++) {
        let char = s[i];
        // Check if the current paranthesis is of opening type and push to our stack
        if(openingParantheses.has(char)) {
            stack.push(char);
        } else {
            // Assume that the current char is closing paranthesis

            // This condition means that we encountered a closing paranthesis before an opening one.
            if(stack.length === 0) {
                return false;
            }

            // Check if top of stack is matching opening paranthesis to the closing one we have in index currently
            let topOfStack = stack.pop();
            if(paranthesesMatchingMap[topOfStack] === char) {
                continue;
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("[(]"))