/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // This seems to be similar to anagram problem with a twist.
    // Calculate the character counts of ransomNote and magazine
    // Then check if char counts of ransomNote and magazine match.
    // return true if it does
    let ransomNoteMap = new Map();
    let magazineMap = new Map();
    for(let i=0; i<ransomNote.length;i++) {
        if(ransomNoteMap.has(ransomNote[i])) {
            let val = ransomNoteMap.get(ransomNote[i]);
            ransomNoteMap.set(ransomNote[i], ++val)
        } else {
            ransomNoteMap.set(ransomNote[i], 1)
        }
    }

    for(let i=0; i<magazine.length;i++) {
        if(magazineMap.has(magazine[i])) {
            let val = magazineMap.get(magazine[i])
            magazineMap.set(magazine[i], ++val)
        } else {
            magazineMap.set(magazine[i], 1)
        }
    }
    console.log(ransomNoteMap, magazineMap)
    for(let [key, val] of ransomNoteMap.entries()) {
        // console.log(`Comparing key ${key} ${magazineMap.get(key)}`)
        if(val > (magazineMap.get(key) || 0)) {
            return false;
        }
    }
    return true;
    
};

console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))