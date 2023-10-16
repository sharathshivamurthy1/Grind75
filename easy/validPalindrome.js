/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert string to lowercase
    // Start from left and right and converge
    // Write a function for checking is alphanum or not
    // If not, move to next char based on pointer
    s = s.toLowerCase();
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    while(leftPointer <= rightPointer) {
        while(!isAlphaNum(s[leftPointer])) {
            leftPointer+=1;
        }
        while(!isAlphaNum(s[rightPointer])) {
            rightPointer-=1;
        }
        if(s[leftPointer] !== s[rightPointer]) {
            return false
        }
        leftPointer+=1;
        rightPointer-=1;
    }
    return true;
};

let isAlphaNum = (char) => {
    return /^[a-zA-Z0-9]+$/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("madam"))
console.log(isPalindrome("12321"))
console.log(isPalindrome("abc2cba"))