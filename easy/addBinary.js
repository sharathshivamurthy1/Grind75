/* Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself. */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // pad the smaller string with 0's
    // then start picking up individual bits and add them
    // keep track of carry.
    // 11
    // 01
    let carry = 0;
    let result = [];
    if(a.length < b.length) {
        a = a.padStart(b.length, "0")
    }
    if(b.length < a.length) {
        b = b.padStart(a.length, "0")
    }
    for(let i=a.length - 1; i>=0; i--) {
        let res = +a[i] + +b[i] + carry;
        if(res > 1) {
            carry = 1;
            res = res % 2;
        } else {
            carry = 0
        }
        result.unshift(res);
    }
    if(carry) {
        result.unshift(carry)
    }
    return result.join('')
};

console.log(addBinary("1010", "1011"))