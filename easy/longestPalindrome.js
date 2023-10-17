/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only. */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Make a hash map of all characters and their frequency
    // Add all even frequencies
    // For odd frequencies, subtract 1 and add them
    // Keep a flag and add 1 in the end if any odd numbers are encountered
    let frequencyHashMap = new Map()
    let longestPalindromeLength = 0;
    let hasOddCounts = false;
    for(let i=0;i<s.length;i++) {
        if(frequencyHashMap.has(s[i])) {
            frequencyHashMap.set(s[i], (frequencyHashMap.get(s[i]))+1)
        } else {
            frequencyHashMap.set(s[i], 1)
        }
    }
    console.log(frequencyHashMap)
    for(let [char, count] of frequencyHashMap) {
        if(count %2 == 0) {
            longestPalindromeLength+=count;
        } else {
            longestPalindromeLength+=count-1;
            hasOddCounts = true
        }
    }
    if(hasOddCounts) {
        longestPalindromeLength+=1;
    }
    return longestPalindromeLength
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("madam"));