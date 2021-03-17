/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * 
 * Example 3:
 * Input: s = "a" 
 * Output: "a"
 * 
 * 
 * Example 4: 
 * Input: s = "ac"
 * Output: "a"
 * 
 */

 // ==================== Solution (Time Limit Exceeds for longer Input) ===================

 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let tempSub = ""
    let longestSub = ""
    let pointer = 0 
    
    for (let i = 0; i<s.length; i++) {
        pointer = i 
        tempSub = ""
        while (pointer < s.length) {
            tempSub = tempSub + s.charAt(pointer)
            if(tempSub === tempSub.split('').reverse().join('') && tempSub.length > longestSub.length){
                longestSub = tempSub
            }
            pointer ++;
        }
    }
    return longestSub
};