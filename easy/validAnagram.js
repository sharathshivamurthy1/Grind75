/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let hashMapOfS = {}
    let hashMapOfT = {}
    for(let i=0; i<s.length; i++) {
        hashMapOfS[s[i]] = hashMapOfS[s[i]] || 0;
        hashMapOfS[s[i]]++;

        hashMapOfT[t[i]] = hashMapOfT[t[i]] || 0;
        hashMapOfT[t[i]]++;
    }
    for(let i in hashMapOfS) {
        if(hashMapOfS[i] !== hashMapOfT[i]) {
            return false
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))